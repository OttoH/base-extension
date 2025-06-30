# SOULVET Content Extractor - Chrome/Edge Extension

A professional browser extension designed for the pet industry, enabling veterinary professionals, pet care providers, and animal enthusiasts to extract and analyze pet-related content from web pages with ease.

![SOULVET Logo](public/icon128.svg)

## 🐾 Features

### Content Extraction
- **Smart Pet Content Detection**: Automatically identifies and extracts pet, veterinary, and animal-related content from any webpage
- **Content Classification**: Categorizes extracted content into types (medical, product, review, article, general pet-related)
- **Keyword Highlighting**: Highlights relevant pet industry keywords within extracted content
- **Metadata Extraction**: Collects page metadata, Open Graph data, and structured data

### User Interface
- **SOULVET Branding**: Custom warm earth-tone color palette (#C4A484) matching the brand identity
- **Professional Design**: Clean, modern interface optimized for pet industry professionals
- **Responsive Layout**: Works seamlessly across different screen sizes
- **Intuitive Navigation**: Tabbed interface for easy content organization

### Technical Features
- **Real-time Extraction**: Instant content analysis on any webpage
- **Background Processing**: Non-intrusive content monitoring and extraction
- **Data Persistence**: Automatically saves extracted data for quick access
- **Cross-browser Support**: Compatible with Chrome and Edge browsers

## 🚀 Installation

### Developer Mode Installation (Chrome/Edge)

1. **Download the Extension**
   ```bash
   git clone [repository-url]
   cd soulvet-extension
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build the Extension**
   ```bash
   npm run build
   ```
   
   Or use the direct command:
   ```bash
   node scripts/build.js
   ```

4. **Load in Browser**
   - Open Chrome/Edge and navigate to `chrome://extensions/` or `edge://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `dist` folder from the project directory

5. **Verify Installation**
   - Look for the SOULVET icon in your browser toolbar
   - The extension should appear in your extensions list

### Production Installation
*Coming soon: Chrome Web Store and Edge Add-ons listings*

## 📖 User Guide

### Getting Started

1. **Navigate to Any Webpage**
   - Visit any website with pet, veterinary, or animal-related content
   - Examples: veterinary clinics, pet supply stores, animal health articles

2. **Open the Extension**
   - Click the SOULVET icon in your browser toolbar
   - The extension popup will display current page information

3. **Extract Content**
   - Click the "Extract Content" button
   - Wait for the extraction process to complete
   - Review extracted content in the organized tabs

### Using the Interface

#### Overview Tab
- **Quick Statistics**: View counts of headings and pet-related content found
- **Extraction Time**: See when the content was last extracted
- **Page Information**: Current URL and basic page details

#### Content Tab
- **Page Headings**: Hierarchical list of all page headings (H1-H6)
- **Pet Content**: Extracted pet-related paragraphs and sections
- **Content Types**: Color-coded badges indicating content classification
- **Keyword Tags**: Highlighted pet industry keywords found in content

#### Meta Tab
- **Page Metadata**: Standard HTML meta tags
- **Open Graph Data**: Social media sharing information
- **Structured Data**: JSON-LD and other structured content
- **Technical Details**: Comprehensive page information for analysis

### Content Types

The extension categorizes extracted content into five types:

- 🏥 **Medical**: Veterinary health, treatment, and medical information
- 🛍️ **Product**: Pet products, supplies, and commercial content
- ⭐ **Review**: Customer reviews, ratings, and testimonials
- 📰 **Article**: News articles, blog posts, and editorial content
- 🐾 **Pet-Related**: General pet care, training, and lifestyle content

## 🛠️ Developer Guide

### Project Structure

```
soulvet-extension/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── badge.tsx           # Badge component for content tags
│   │   │   ├── button.tsx          # Button component with SOULVET styling
│   │   │   ├── card.tsx            # Card component for content sections
│   │   │   └── tabs.tsx            # Tabbed interface component
│   │   ├── ExtractedContent.tsx    # Main content display component
│   │   └── SoulvetLogo.tsx         # SOULVET logo component
│   ├── lib/
│   │   ├── contentExtractor.ts     # Core content extraction engine
│   │   └── utils.ts                # Utility functions and helpers
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── background.ts               # Background service worker
│   ├── content.ts                  # Content script (page context)
│   ├── popup.tsx                   # React popup interface
│   ├── popup.html                  # Popup HTML template
│   └── globals.css                 # Global styles and SOULVET theme
├── public/
│   ├── icon16.svg                  # 16px extension icon
│   ├── icon48.svg                  # 48px extension icon
│   └── icon128.svg                 # 128px extension icon
├── dist/                           # Built extension files (generated)
├── manifest.json                   # Chrome extension manifest
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── webpack.config.js               # Webpack build configuration
└── README.md                       # This file
```

### Architecture Overview

The extension follows a standard Chrome Extension Manifest V3 architecture:

#### 1. **Background Service Worker** (`background.ts`)
- Manages extension lifecycle and installation
- Handles inter-component communication
- Provides context menu integration
- Manages data storage and retrieval
- Implements tab monitoring for pet-related sites

#### 2. **Content Scripts** (`content.ts`)
- Runs in webpage context for DOM access
- Monitors page changes and dynamic content
- Extracts content using sophisticated algorithms
- Communicates with background worker

#### 3. **Popup Interface** (`popup.tsx`)
- React-based user interface
- Displays extracted content in organized tabs
- Provides manual content extraction controls
- Shows real-time extraction statistics

#### 4. **Content Extraction Engine** (`lib/contentExtractor.ts`)
- Advanced pet industry keyword detection (40+ keywords)
- Content classification system (medical, product, review, article)
- Smart filtering to avoid navigation/UI elements
- Relevance scoring and content ranking
- Metadata and structured data extraction

## 🎨 SOULVET Design System

### Color Palette
The extension uses a warm, earth-tone color palette that reflects the SOULVET brand:

```css
/* Primary Colors */
--soulvet-primary: #C4A484;      /* Warm beige - main brand color */
--soulvet-secondary: #A68A6A;    /* Medium brown */
--soulvet-accent: #8B6F3F;       /* Dark brown - accent color */

/* Supporting Colors */
--soulvet-brown: #6B5B3F;        /* Text brown */
--soulvet-dark: #4A3D2A;         /* Dark brown - headers */
--soulvet-light: #E8DDD0;        /* Light cream - backgrounds */
--soulvet-cream: #F5F2ED;        /* Lightest cream */
--soulvet-warm: #D4B896;         /* Warm beige variant */
```

### Typography
- **Font Family**: System fonts for cross-platform consistency
- **Headers**: SOULVET brown (#6B5B3F) with medium weight
- **Body Text**: Dark brown (#4A3D2A) for readability
- **Accent Text**: SOULVET accent (#8B6F3F) for highlights

### Components
All UI components follow the SOULVET design language with:
- Rounded corners for friendly appearance
- Subtle shadows for depth
- Hover states with warm color transitions
- Focus states for accessibility

## 🔧 Technical Specifications

### Dependencies

#### Core Framework
- **React 19**: Modern React with concurrent features
- **TypeScript 5.8**: Full type safety and IntelliSense
- **Tailwind CSS 4.1**: Utility-first styling framework

#### Browser Extension APIs
- **Chrome Extension APIs**: Manifest V3 compliant
- **Cross-browser Support**: Chrome and Edge compatible
- **Permissions**: Minimal security footprint (activeTab, storage, scripting)

#### Build Tools
- **Webpack 5**: Module bundling and optimization
- **PostCSS**: CSS processing and autoprefixing
- **TypeScript Loader**: Direct TypeScript compilation
- **Copy Plugin**: Asset management

### Performance Features
- **Code Splitting**: Optimized bundle sizes
- **Lazy Loading**: On-demand component loading
- **Debounced Extraction**: Efficient content monitoring
- **Caching**: Local storage for quick access

### Security Features
- **Content Security Policy**: Secure script execution
- **Minimal Permissions**: Only necessary browser access
- **Data Sanitization**: Clean text extraction
- **Secure Communication**: Background ↔ Content script messaging

## 📚 API Reference

### Content Extraction API

#### `extractPageContent(): ExtractedData`
Extracts and categorizes pet-related content from the current page.

**Returns:**
```typescript
interface ExtractedData {
  url: string;                    // Current page URL
  title: string;                  // Page title
  headings: Array<{               // Page headings (H1-H6)
    level: number;
    text: string;
    id: string;
  }>;
  petRelatedContent: Array<{      // Extracted pet content
    id: string;
    text: string;
    keywords: string[];
    tagName: string;
    className: string;
    type: ContentType;
  }>;
  metadata: Record<string, string>; // Page metadata
  extractedAt: string;            // ISO timestamp
}
```

#### Content Types
```typescript
type ContentType = 'pet-related' | 'medical' | 'product' | 'review' | 'article';
```

### Message API

#### Background ↔ Content Communication
```typescript
interface ExtensionMessage {
  action: string;
  data?: any;
  tabId?: number;
  success?: boolean;
  error?: string;
}
```

**Supported Actions:**
- `extractContent`: Trigger content extraction
- `contentChanged`: Notify of page changes
- `getStoredData`: Retrieve cached data
- `clearStoredData`: Clear extraction cache

### Storage API

#### Local Storage Structure
```typescript
interface StorageData {
  extractedData?: ExtractedData;    // Current extraction
  settings?: ExtensionSettings;     // User preferences
  lastExtraction?: ExtractedData;   // Previous extraction
  lastExtractionTabId?: number;     // Associated tab
}
```

## 🧪 Testing Guide

### Manual Testing

#### 1. **Installation Testing**
- Load extension in developer mode
- Verify icon appears in toolbar
- Check extension appears in chrome://extensions/

#### 2. **Content Extraction Testing**
Visit these test sites and verify extraction:

**Veterinary Websites:**
- Local veterinary clinic websites
- Pet health information sites
- Animal hospital pages

**Pet Product Sites:**
- Pet supply stores
- Product review pages
- Pet food manufacturer sites

**Expected Results:**
- Medical content should be tagged with red badges
- Product information should show blue badges
- Reviews should display green badges
- Articles should have purple badges

#### 3. **UI/UX Testing**
- Test all three tabs (Overview, Content, Meta)
- Verify SOULVET branding and colors
- Check responsive behavior
- Test extraction and clear functionality

#### 4. **Performance Testing**
- Test on large pages (should complete within 2-3 seconds)
- Verify memory usage remains reasonable
- Check for content extraction accuracy

### Automated Testing Setup

For developers implementing automated tests:

#### Unit Tests
```bash
# Test individual components
npm test -- --testPathPattern=components
```

#### Integration Tests
```bash
# Test content extraction engine
npm test -- --testPathPattern=contentExtractor
```

#### E2E Tests
```bash
# Test full extension workflow
npm run test:e2e
```

## 🚀 Development Workflow

### Setting Up Development Environment

1. **Clone and Install**
   ```bash
   git clone [repository-url]
   cd soulvet-extension
   npm install
   ```

2. **Development Build**
   ```bash
   npm run dev     # Watch mode for development
   ```

3. **Production Build**
   ```bash
   npm run build   # Optimized production build
   ```

### Available Scripts

The project includes the following npm scripts:

```json
{
  "scripts": {
    "build": "node scripts/build.js",
    "dev": "node scripts/dev.js",
    "webpack:build": "npx webpack --mode=production",
    "webpack:dev": "npx webpack --mode=development --watch",
    "type-check": "npx tsc --noEmit"
  }
}
```

**Usage:**
```bash
npm run build       # Production build with helper script
npm run dev         # Development build with watch mode
npm run type-check  # TypeScript type checking
```

**Direct Commands:**
```bash
node scripts/build.js                    # Production build
node scripts/dev.js                      # Development with watch
npx webpack --mode=production            # Direct webpack build
npx webpack --mode=development --watch   # Direct webpack dev
```

### File Watching
During development, webpack watches for file changes and rebuilds automatically. Reload the extension in Chrome to see changes.

### Debugging

#### Chrome DevTools Integration
- **Popup Debugging**: Right-click extension icon → "Inspect popup"
- **Background Script**: chrome://extensions/ → Extension → "Service worker"
- **Content Script**: Regular page DevTools, check console

#### Common Debug Points
- Content extraction accuracy
- Message passing between contexts
- Storage and caching behavior
- Performance on large pages

## 🔄 Deployment & Distribution

### Chrome Web Store Preparation

1. **Build Production Version**
   ```bash
   npm run build
   ```

2. **Create ZIP Package**
   ```bash
   cd dist
   zip -r soulvet-extension.zip .
   ```

3. **Store Listing Requirements**
   - High-quality screenshots (1280x800px)
   - Detailed description highlighting pet industry focus
   - Privacy policy (if collecting data)
   - SOULVET branding assets

### Edge Add-ons Store

The same extension package works for Edge with minimal modifications:
- Update manifest for Edge-specific features
- Test in Edge browser environment
- Submit through Edge Developer Dashboard

### Enterprise Distribution

For veterinary practices and pet businesses:
- Policy-based deployment through Chrome for Business
- Custom branding options
- Integration with existing IT infrastructure

## 🛡️ Privacy & Security

### Data Collection
The extension collects only:
- Extracted content from pages you visit
- Page metadata for content analysis
- No personal information or browsing history

### Data Storage
- All data stored locally in browser
- No external servers or cloud storage
- Data cleared when extension is removed

### Permissions Explanation
- **activeTab**: Access current tab for content extraction
- **storage**: Save extracted data locally
- **scripting**: Inject content extraction scripts

## 🆘 Troubleshooting

### Common Issues

#### Extension Not Loading
- Verify Chrome is up to date
- Check developer mode is enabled
- Ensure all files are in dist/ folder

#### No Content Extracted
- Check if page contains pet-related keywords
- Try refreshing the page
- Verify extension has activeTab permission

#### Styling Issues
- Clear browser cache
- Reload extension
- Check console for CSS errors

#### Performance Problems
- Test on different page sizes
- Check for memory leaks in DevTools
- Verify extraction limits are working

### Getting Help

For technical support:
1. Check browser console for error messages
2. Verify extension permissions in chrome://extensions/
3. Test with different websites
4. Report issues with specific page URLs and error details

## 📈 Future Roadmap

### Planned Features
- **AI-Powered Content Analysis**: Enhanced content classification
- **Multi-language Support**: International veterinary content
- **Custom Keyword Sets**: User-defined extraction criteria
- **Export Functionality**: Save extracted content to files
- **Team Collaboration**: Share extractions within organizations

### Technical Improvements
- **Performance Optimization**: Faster extraction algorithms
- **Better Content Recognition**: Improved pet industry detection
- **Accessibility Features**: Screen reader compatibility
- **Mobile Support**: Responsive design enhancements

## 📄 License

This project is proprietary software owned by SOULVET. All rights reserved.

For licensing inquiries, contact the SOULVET development team.

---

**SOULVET Content Extractor** - Professional content extraction for the pet industry.

*Built with ❤️ for veterinary professionals and pet care providers.*
