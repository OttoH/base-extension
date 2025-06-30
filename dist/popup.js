"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const client_1 = require("react-dom/client");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const ExtractedContent_1 = require("./components/ExtractedContent");
const SoulvetLogo_1 = require("./components/SoulvetLogo");
const muiTheme_1 = require("./theme/muiTheme");
require("./globals.css");
const TabPanel = ({ children, value, index, ...other }) => {
    return (react_1.default.createElement("div", { role: "tabpanel", hidden: value !== index, id: `simple-tabpanel-${index}`, "aria-labelledby": `simple-tab-${index}`, ...other }, value === index && react_1.default.createElement(material_1.Box, { sx: { p: 2 } }, children)));
};
const Popup = () => {
    const [extractedData, setExtractedData] = (0, react_1.useState)(null);
    const [isExtracting, setIsExtracting] = (0, react_1.useState)(false);
    const [currentUrl, setCurrentUrl] = (0, react_1.useState)('');
    const [tabValue, setTabValue] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
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
                        const data = {
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
                        const petContent = [];
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
                                    type: 'pet-related'
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
                const data = results[0].result;
                setExtractedData(data);
                // Cache the extracted data
                chrome.storage.local.set({ extractedData: data });
            }
        }
        catch (error) {
            console.error('Failed to extract content:', error);
        }
        finally {
            setIsExtracting(false);
        }
    };
    const handleClearData = () => {
        setExtractedData(null);
        chrome.storage.local.remove(['extractedData']);
    };
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: muiTheme_1.soulvetTheme },
        react_1.default.createElement(material_1.CssBaseline, null),
        react_1.default.createElement(material_1.Box, { className: "extension-popup" },
            react_1.default.createElement(material_1.Card, null,
                react_1.default.createElement(material_1.CardHeader, { sx: {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        py: 2
                    } },
                    react_1.default.createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center', gap: 2 } },
                        react_1.default.createElement(SoulvetLogo_1.SoulvetLogo, { size: 32 }),
                        react_1.default.createElement(material_1.Box, null,
                            react_1.default.createElement(material_1.Typography, { variant: "h1", sx: { color: 'inherit' } }, "SOULVET"),
                            react_1.default.createElement(material_1.Typography, { variant: "body2", sx: { color: 'inherit', opacity: 0.8 } }, "Content Extractor")))),
                react_1.default.createElement(material_1.CardContent, { sx: { p: 2 } },
                    react_1.default.createElement(material_1.Box, { sx: { mb: 2 } },
                        react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 } }, "Current Page:"),
                        react_1.default.createElement(material_1.Paper, { sx: { p: 1, backgroundColor: 'secondary.light', fontSize: '0.6875rem', fontFamily: 'monospace', wordBreak: 'break-all' } }, currentUrl || 'Loading...')),
                    react_1.default.createElement(material_1.Box, { sx: { display: 'flex', gap: 1, mb: 2 } },
                        react_1.default.createElement(material_1.Button, { onClick: handleExtractContent, disabled: isExtracting, variant: "contained", color: "primary", sx: { flex: 1 } }, isExtracting ? 'Extracting...' : 'Extract Content'),
                        extractedData && (react_1.default.createElement(material_1.Button, { onClick: handleClearData, variant: "outlined", color: "secondary" }, "Clear"))),
                    extractedData && (react_1.default.createElement(material_1.Box, null,
                        react_1.default.createElement(material_1.Tabs, { value: tabValue, onChange: handleTabChange },
                            react_1.default.createElement(material_1.Tab, { label: "Overview" }),
                            react_1.default.createElement(material_1.Tab, { label: "Content" }),
                            react_1.default.createElement(material_1.Tab, { label: "Meta" })),
                        react_1.default.createElement(TabPanel, { value: tabValue, index: 0 },
                            react_1.default.createElement(material_1.Box, { sx: { display: 'flex', flexDirection: 'column', gap: 1 } },
                                react_1.default.createElement(material_1.Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                                    react_1.default.createElement(material_1.Typography, { variant: "body2" }, "Headings Found:"),
                                    react_1.default.createElement(material_1.Chip, { label: extractedData.headings.length, size: "small" })),
                                react_1.default.createElement(material_1.Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                                    react_1.default.createElement(material_1.Typography, { variant: "body2" }, "Pet Content:"),
                                    react_1.default.createElement(material_1.Chip, { label: extractedData.petRelatedContent.length, size: "small", color: "primary" })),
                                react_1.default.createElement(material_1.Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                                    react_1.default.createElement(material_1.Typography, { variant: "body2" }, "Extracted:"),
                                    react_1.default.createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, new Date(extractedData.extractedAt).toLocaleTimeString())))),
                        react_1.default.createElement(TabPanel, { value: tabValue, index: 1 },
                            react_1.default.createElement(ExtractedContent_1.ExtractedContent, { data: extractedData })),
                        react_1.default.createElement(TabPanel, { value: tabValue, index: 2 },
                            react_1.default.createElement(material_1.Box, { sx: { maxHeight: 240, overflowY: 'auto' } }, Object.entries(extractedData.metadata).map(([key, value]) => (react_1.default.createElement(material_1.Box, { key: key, sx: { borderBottom: '1px solid', borderColor: 'divider', pb: 1, mb: 1 } },
                                react_1.default.createElement(material_1.Typography, { variant: "caption", sx: { fontWeight: 'bold', color: 'text.secondary' } },
                                    key,
                                    ":"),
                                react_1.default.createElement(material_1.Typography, { variant: "caption", sx: { display: 'block', wordBreak: 'break-words', color: 'text.secondary' } }, value)))))))))))));
};
// Initialize the popup
const container = document.getElementById('root');
if (container) {
    const root = (0, client_1.createRoot)(container);
    root.render(react_1.default.createElement(Popup, null));
}
