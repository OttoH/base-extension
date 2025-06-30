import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { ExtractedContent } from './components/ExtractedContent';
import { SoulvetLogo } from './components/SoulvetLogo';
import { ExtractedData, ContentType } from './types';
import './globals.css';

const Popup: React.FC = () => {
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    // Get current tab URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.url) {
        setCurrentUrl(tabs[0].url);
      }
    });

    // Check if we have cached data for this tab
    chrome.storage.local.get(['extractedData'], (result) => {
      if (result.extractedData) {
        setExtractedData(result.extractedData);
      }
    });
  }, []);

  const handleExtractContent = async () => {
    setIsExtracting(true);
    
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      if (!tab.id) {
        throw new Error('No active tab found');
      }

      // Inject and execute content script
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          // Content extraction logic that runs in the page context
          const extractContentFromPage = () => {
            const data: any = {
              url: window.location.href,
              title: document.title,
              headings: [],
              petRelatedContent: [],
              metadata: {},
              extractedAt: new Date().toISOString()
            };

            // Extract headings
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            data.headings = Array.from(headings).map(h => ({
              level: parseInt(h.tagName.substring(1)),
              text: h.textContent?.trim() || '',
              id: h.id || ''
            }));

            // Extract pet-related content (looking for common pet keywords)
            const petKeywords = [
              'dog', 'cat', 'pet', 'animal', 'veterinary', 'vet', 'puppy', 'kitten',
              'breed', 'health', 'nutrition', 'grooming', 'training', 'behavior',
              'vaccine', 'medical', 'clinic', 'hospital', 'care', 'wellness'
            ];

            const textElements = document.querySelectorAll('p, div, span, article, section');
            const petContent: any[] = [];

            textElements.forEach((element, index) => {
              const text = element.textContent?.toLowerCase() || '';
              const matchedKeywords = petKeywords.filter(keyword => text.includes(keyword));
              
              if (matchedKeywords.length > 0 && element.textContent && element.textContent.trim().length > 50) {
                petContent.push({
                  id: `pet-content-${index}`,
                  text: element.textContent.trim(),
                  keywords: matchedKeywords,
                  tagName: element.tagName.toLowerCase(),
                  className: element.className || '',
                  type: 'pet-related' as ContentType
                });
              }
            });

            data.petRelatedContent = petContent.slice(0, 10); // Limit to first 10 matches

            // Extract metadata
            const metaTags = document.querySelectorAll('meta');
            metaTags.forEach(meta => {
              const name = meta.getAttribute('name') || meta.getAttribute('property') || '';
              const content = meta.getAttribute('content') || '';
              if (name && content) {
                data.metadata[name] = content;
              }
            });

            return data;
          };

          return extractContentFromPage();
        }
      });

      if (results[0]?.result) {
        const data = results[0].result as ExtractedData;
        setExtractedData(data);
        
        // Cache the extracted data
        chrome.storage.local.set({ extractedData: data });
      }
    } catch (error) {
      console.error('Failed to extract content:', error);
    } finally {
      setIsExtracting(false);
    }
  };

  const handleClearData = () => {
    setExtractedData(null);
    chrome.storage.local.remove(['extractedData']);
  };

  return (
    <div className="w-96 min-h-[500px] bg-soulvet-cream">
      <Card className="border-soulvet-brown/20">
        <CardHeader className="bg-soulvet-primary text-white">
          <div className="flex items-center gap-3">
            <SoulvetLogo size={32} />
            <div>
              <CardTitle className="text-lg">SOULVET</CardTitle>
              <CardDescription className="text-soulvet-cream/80">
                Content Extractor
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-4 space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-soulvet-brown/70">Current Page:</p>
            <p className="text-xs font-mono bg-soulvet-light p-2 rounded break-all">
              {currentUrl || 'Loading...'}
            </p>
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={handleExtractContent}
              disabled={isExtracting}
              className="flex-1 bg-soulvet-accent hover:bg-soulvet-accent/90"
            >
              {isExtracting ? 'Extracting...' : 'Extract Content'}
            </Button>
            
            {extractedData && (
              <Button 
                onClick={handleClearData}
                variant="outline"
                className="border-soulvet-brown/30 text-soulvet-brown hover:bg-soulvet-light"
              >
                Clear
              </Button>
            )}
          </div>

          {extractedData && (
            <Tabs defaultValue="overview" className="mt-4">
              <TabsList className="grid w-full grid-cols-3 bg-soulvet-light">
                <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
                <TabsTrigger value="content" className="text-xs">Content</TabsTrigger>
                <TabsTrigger value="metadata" className="text-xs">Meta</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-4 space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Headings Found:</span>
                    <Badge variant="secondary">{extractedData.headings.length}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Pet Content:</span>
                    <Badge variant="secondary" className="bg-soulvet-accent/10 text-soulvet-accent">
                      {extractedData.petRelatedContent.length}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Extracted:</span>
                    <span className="text-xs text-soulvet-brown/60">
                      {new Date(extractedData.extractedAt).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="content" className="mt-4">
                <ExtractedContent data={extractedData} />
              </TabsContent>
              
              <TabsContent value="metadata" className="mt-4">
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {Object.entries(extractedData.metadata).map(([key, value]) => (
                    <div key={key} className="text-xs border-b border-soulvet-brown/10 pb-1">
                      <div className="font-medium text-soulvet-brown">{key}:</div>
                      <div className="text-soulvet-brown/70 break-words">{value}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Initialize the popup
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Popup />);
}
