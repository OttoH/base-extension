// Background service worker for the extension
import { ExtractedData } from './types';

class BackgroundService {
  constructor() {
    this.setupExtensionListeners();
    this.setupContextMenus();
  }

  private setupExtensionListeners(): void {
    // Handle extension installation
    chrome.runtime.onInstalled.addListener((details) => {
      if (details.reason === 'install') {
        this.handleFirstInstall();
      } else if (details.reason === 'update') {
        this.handleExtensionUpdate(details.previousVersion);
      }
    });

    // Handle messages from content scripts and popup
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      this.handleMessage(request, sender, sendResponse);
      return true; // Keep message channel open for async responses
    });

    // Handle tab updates
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (changeInfo.status === 'complete' && tab.url) {
        this.handleTabComplete(tabId, tab);
      }
    });
  }

  private setupContextMenus(): void {
    chrome.contextMenus.create({
      id: 'soulvet-extract',
      title: 'Extract pet content with SOULVET',
      contexts: ['page', 'selection']
    });

    chrome.contextMenus.onClicked.addListener((info, tab) => {
      if (info.menuItemId === 'soulvet-extract' && tab?.id) {
        this.extractContentFromTab(tab.id);
      }
    });
  }

  private async handleMessage(
    request: any, 
    sender: chrome.runtime.MessageSender, 
    sendResponse: (response?: any) => void
  ): Promise<void> {
    try {
      switch (request.action) {
        case 'extractContent':
          if (sender.tab?.id) {
            const data = await this.extractContentFromTab(sender.tab.id);
            sendResponse({ success: true, data });
          } else {
            sendResponse({ success: false, error: 'No tab ID available' });
          }
          break;

        case 'contentChanged':
          this.handleContentChange(request.url, sender.tab?.id);
          sendResponse({ success: true });
          break;

        case 'getStoredData':
          const storedData = await this.getStoredData(request.tabId);
          sendResponse({ success: true, data: storedData });
          break;

        case 'clearStoredData':
          await this.clearStoredData(request.tabId);
          sendResponse({ success: true });
          break;

        default:
          sendResponse({ success: false, error: 'Unknown action' });
      }
    } catch (error) {
      console.error('Background script error:', error);
      sendResponse({ success: false, error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }

  private async extractContentFromTab(tabId: number): Promise<ExtractedData | null> {
    try {
      const results = await chrome.scripting.executeScript({
        target: { tabId },
        func: () => {
          // This function runs in the page context
          const extractor = (window as any).contentExtractor;
          if (extractor && typeof extractor.extractPageContent === 'function') {
            return extractor.extractPageContent();
          }
          
          // Fallback extraction if content script not available
          return {
            url: window.location.href,
            title: document.title,
            headings: [],
            petRelatedContent: [],
            metadata: {},
            extractedAt: new Date().toISOString()
          };
        }
      });

      if (results[0]?.result) {
        const data = results[0].result as ExtractedData;
        await this.storeExtractedData(tabId, data);
        return data;
      }
    } catch (error) {
      console.error('Failed to extract content:', error);
    }
    
    return null;
  }

  private async storeExtractedData(tabId: number, data: ExtractedData): Promise<void> {
    const key = `extracted_data_${tabId}`;
    await chrome.storage.local.set({ [key]: data });
    
    // Also store in session for quick access
    await chrome.storage.session.set({ 
      lastExtraction: data,
      lastExtractionTabId: tabId 
    });
  }

  private async getStoredData(tabId: number): Promise<ExtractedData | null> {
    const key = `extracted_data_${tabId}`;
    const result = await chrome.storage.local.get([key]);
    return result[key] || null;
  }

  private async clearStoredData(tabId: number): Promise<void> {
    const key = `extracted_data_${tabId}`;
    await chrome.storage.local.remove([key]);
  }

  private handleFirstInstall(): void {
    // Set default settings
    chrome.storage.sync.set({
      autoExtract: false,
      petKeywords: [
        'dog', 'cat', 'pet', 'animal', 'veterinary', 'vet'
      ],
      minContentLength: 30,
      maxResults: 15
    });

    // Open welcome page
    chrome.tabs.create({
      url: chrome.runtime.getURL('welcome.html')
    });
  }

  private handleExtensionUpdate(previousVersion?: string): void {
    console.log(`SOULVET Extension updated from ${previousVersion} to ${chrome.runtime.getManifest().version}`);
    
    // Handle migration if needed
    if (previousVersion && this.needsMigration(previousVersion)) {
      this.migrateData(previousVersion);
    }
  }

  private needsMigration(previousVersion: string): boolean {
    // Add version comparison logic here
    return false;
  }

  private async migrateData(previousVersion: string): Promise<void> {
    // Add data migration logic here
    console.log('Migrating data from version:', previousVersion);
  }

  private handleTabComplete(tabId: number, tab: chrome.tabs.Tab): void {
    // Check if this is a pet-related website
    if (tab.url && this.isPetRelatedUrl(tab.url)) {
      // Optionally auto-extract content for pet-related sites
      chrome.storage.sync.get(['autoExtract'], (result) => {
        if (result.autoExtract) {
          this.extractContentFromTab(tabId);
        }
      });
    }
  }

  private isPetRelatedUrl(url: string): boolean {
    const petDomains = [
      'petmd.com', 'akc.org', 'aspca.org', 'petco.com', 'petsmart.com',
      'chewy.com', 'vetstreet.com', 'petfinder.com', 'rover.com'
    ];
    
    const petKeywords = [
      'veterinary', 'animal', 'pet', 'dog', 'cat', 'puppy', 'kitten'
    ];

    return petDomains.some(domain => url.includes(domain)) ||
           petKeywords.some(keyword => url.toLowerCase().includes(keyword));
  }

  private handleContentChange(url: string, tabId?: number): void {
    // Handle dynamic content changes
    if (tabId) {
      // Debounce rapid changes
      clearTimeout((this as any)[`contentChangeTimer_${tabId}`]);
      (this as any)[`contentChangeTimer_${tabId}`] = setTimeout(() => {
        console.log('Content changed on tab:', tabId);
        // Optionally re-extract content
      }, 2000);
    }
  }
}

// Initialize background service
new BackgroundService();

export default BackgroundService;
