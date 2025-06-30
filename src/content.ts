// Content script that runs in the context of web pages
import { ExtractedData, ContentType } from './types';

class ContentExtractor {
  private static instance: ContentExtractor;
  
  public static getInstance(): ContentExtractor {
    if (!ContentExtractor.instance) {
      ContentExtractor.instance = new ContentExtractor();
    }
    return ContentExtractor.instance;
  }

  // Listen for messages from the popup
  constructor() {
    this.setupMessageListener();
    this.observePageChanges();
  }

  private setupMessageListener(): void {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'extractContent') {
        const data = this.extractPageContent();
        sendResponse(data);
      }
      return true;
    });
  }

  private observePageChanges(): void {
    // Observer for dynamic content changes
    const observer = new MutationObserver((mutations) => {
      // Debounce rapid changes
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }
      this.debounceTimer = setTimeout(() => {
        this.notifyContentChange();
      }, 1000);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false
    });
  }

  private debounceTimer: ReturnType<typeof setTimeout> | null = null;

  private notifyContentChange(): void {
    // Notify background script of content changes
    chrome.runtime.sendMessage({
      action: 'contentChanged',
      url: window.location.href
    });
  }

  public extractPageContent(): ExtractedData {
    const data: ExtractedData = {
      url: window.location.href,
      title: document.title,
      headings: this.extractHeadings(),
      petRelatedContent: this.extractPetContent(),
      metadata: this.extractMetadata(),
      extractedAt: new Date().toISOString()
    };

    return data;
  }

  private extractHeadings(): Array<{level: number, text: string, id: string}> {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    return Array.from(headings).map(heading => ({
      level: parseInt(heading.tagName.substring(1)),
      text: heading.textContent?.trim() || '',
      id: heading.id || ''
    }));
  }

  private extractPetContent(): Array<{
    id: string;
    text: string;
    keywords: string[];
    tagName: string;
    className: string;
    type: ContentType;
  }> {
    const petKeywords = [
      'dog', 'cat', 'pet', 'animal', 'veterinary', 'vet', 'puppy', 'kitten',
      'breed', 'health', 'nutrition', 'grooming', 'training', 'behavior',
      'vaccine', 'vaccination', 'medical', 'clinic', 'hospital', 'care', 
      'wellness', 'surgery', 'treatment', 'medicine', 'diagnosis', 'therapy',
      'emergency', 'dental', 'spay', 'neuter', 'parasite', 'flea', 'tick',
      'heartworm', 'allergy', 'diet', 'exercise', 'adoption', 'rescue'
    ];

    const selectors = [
      'p', 'div', 'span', 'article', 'section', 'li', 'td',
      '[class*="content"]', '[class*="description"]', '[class*="text"]',
      '[class*="article"]', '[class*="post"]', '[class*="review"]'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));
    const petContent: Array<{
      id: string;
      text: string;
      keywords: string[];
      tagName: string;
      className: string;
      type: ContentType;
    }> = [];

    elements.forEach((element, index) => {
      const text = element.textContent?.toLowerCase() || '';
      const originalText = element.textContent?.trim() || '';
      
      // Skip if text is too short or likely navigation/UI text
      if (originalText.length < 30 || originalText.length > 2000) {
        return;
      }

      const matchedKeywords = petKeywords.filter(keyword => 
        text.includes(keyword.toLowerCase())
      );
      
      if (matchedKeywords.length >= 1) { // At least one pet-related keyword
        // Calculate relevance score
        const relevanceScore = this.calculateRelevanceScore(text, petKeywords);
        
        if (relevanceScore > 0.1) { // Minimum relevance threshold
          petContent.push({
            id: `pet-content-${index}`,
            text: originalText,
            keywords: matchedKeywords,
            tagName: element.tagName.toLowerCase(),
            className: element.className || '',
            type: this.determineContentType(element, matchedKeywords)
          });
        }
      }
    });

    // Sort by relevance and limit results
    return petContent
      .sort((a, b) => b.keywords.length - a.keywords.length)
      .slice(0, 15);
  }

  private calculateRelevanceScore(text: string, keywords: string[]): number {
    const words = text.split(/\s+/);
    const keywordMatches = keywords.filter(keyword => text.includes(keyword)).length;
    return keywordMatches / words.length;
  }

  private determineContentType(element: Element, keywords: string[]): ContentType {
    const className = element.className.toLowerCase();
    const tagName = element.tagName.toLowerCase();
    
    // Check for medical/health related content
    const medicalKeywords = ['health', 'medical', 'veterinary', 'treatment', 'diagnosis', 'surgery'];
    if (keywords.some(k => medicalKeywords.includes(k))) {
      return 'medical';
    }
    
    // Check for product-related content
    if (className.includes('product') || className.includes('item') || 
        tagName === 'li' && element.closest('[class*="product"]')) {
      return 'product';
    }
    
    // Check for review content
    if (className.includes('review') || className.includes('rating') ||
        className.includes('comment') || className.includes('feedback')) {
      return 'review';
    }
    
    // Check for article content
    if (tagName === 'article' || className.includes('article') || 
        className.includes('post') || className.includes('blog')) {
      return 'article';
    }
    
    return 'pet-related';
  }

  private extractMetadata(): Record<string, string> {
    const metadata: Record<string, string> = {};
    
    // Extract meta tags
    const metaTags = document.querySelectorAll('meta');
    metaTags.forEach(meta => {
      const name = meta.getAttribute('name') || 
                   meta.getAttribute('property') || 
                   meta.getAttribute('http-equiv') || '';
      const content = meta.getAttribute('content') || '';
      
      if (name && content) {
        metadata[name] = content;
      }
    });

    // Extract structured data
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach((script, index) => {
      try {
        const jsonData = JSON.parse(script.textContent || '');
        metadata[`structured_data_${index}`] = JSON.stringify(jsonData);
      } catch (e) {
        // Ignore invalid JSON
      }
    });

    return metadata;
  }
}

// Initialize content extractor
ContentExtractor.getInstance();

export default ContentExtractor;
