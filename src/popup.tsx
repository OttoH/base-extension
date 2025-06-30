import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Card, CardContent, CardHeader, Button, Chip, Tabs, Tab, Typography, Paper } from '@mui/material';
import { ExtractedContent } from './components/ExtractedContent';
import { LoginPage } from './components/LoginPage';
import { SoulvetLogo } from './components/SoulvetLogo';
import { soulvetTheme } from './theme/muiTheme';
import { ExtractedData, ContentType } from './types';
import './globals.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};

const Popup: React.FC = () => {
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [tabValue, setTabValue] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // Check login status first
    chrome.storage.local.get(['isLoggedIn'], (result) => {
      setIsLoggedIn(!!result.isLoggedIn);
      setIsCheckingAuth(false);
    });

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Show loading state while checking authentication
  if (isCheckingAuth) {
    return (
      <ThemeProvider theme={soulvetTheme}>
        <CssBaseline />
        <Box className="extension-popup" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 500 }}>
          <Typography>Loading...</Typography>
        </Box>
      </ThemeProvider>
    );
  }

  // Show login page if not logged in
  if (!isLoggedIn) {
    return (
      <ThemeProvider theme={soulvetTheme}>
        <CssBaseline />
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={soulvetTheme}>
      <CssBaseline />
      <Box className="extension-popup">
        <Card>
          <CardHeader 
            sx={{ 
              backgroundColor: 'primary.main', 
              color: 'primary.contrastText',
              py: 2
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <SoulvetLogo size={32} />
              <Box>
                <Typography variant="h1" sx={{ color: 'inherit' }}>SOULVET</Typography>
                <Typography variant="body2" sx={{ color: 'inherit', opacity: 0.8 }}>
                  Content Extractor
                </Typography>
              </Box>
            </Box>
          </CardHeader>
          
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Current Page:
              </Typography>
              <Paper sx={{ p: 1, backgroundColor: 'secondary.light', fontSize: '0.6875rem', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                {currentUrl || 'Loading...'}
              </Paper>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Button 
                onClick={handleExtractContent}
                disabled={isExtracting}
                variant="contained"
                color="primary"
                sx={{ flex: 1 }}
              >
                {isExtracting ? 'Extracting...' : 'Extract Content'}
              </Button>
              
              {extractedData && (
                <Button 
                  onClick={handleClearData}
                  variant="outlined"
                  color="secondary"
                >
                  Clear
                </Button>
              )}
            </Box>

            {extractedData && (
              <Box>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab label="Overview" />
                  <Tab label="Content" />
                  <Tab label="Meta" />
                </Tabs>
                
                <TabPanel value={tabValue} index={0}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2">Headings Found:</Typography>
                      <Chip label={extractedData.headings.length} size="small" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2">Pet Content:</Typography>
                      <Chip label={extractedData.petRelatedContent.length} size="small" color="primary" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2">Extracted:</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(extractedData.extractedAt).toLocaleTimeString()}
                      </Typography>
                    </Box>
                  </Box>
                </TabPanel>
                
                <TabPanel value={tabValue} index={1}>
                  <ExtractedContent data={extractedData} />
                </TabPanel>
                
                <TabPanel value={tabValue} index={2}>
                  <Box sx={{ maxHeight: 240, overflowY: 'auto' }}>
                    {Object.entries(extractedData.metadata).map(([key, value]) => (
                      <Box key={key} sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 1, mb: 1 }}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                          {key}:
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'block', wordBreak: 'break-words', color: 'text.secondary' }}>
                          {value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </TabPanel>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

// Initialize the popup
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Popup />);
}
