# SOULVET Content Extractor - Chrome/Edge Extension

## Overview

The SOULVET Content Extractor is a professional browser extension designed specifically for the pet industry. It enables veterinary professionals, pet care providers, and animal enthusiasts to extract and analyze pet-related content from web pages with smart detection and categorization capabilities.

The extension features a warm earth-tone design palette (#C4A484) that reflects the SOULVET brand identity and provides a clean, modern interface optimized for professional use.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom SOULVET color palette for consistent branding
- **Build System**: Webpack 5 with TypeScript compilation and CSS processing
- **UI Components**: Custom component library with reusable Button, Card, Badge, and Tabs components

### Backend Architecture
- **Extension Structure**: Chrome Manifest V3 architecture with separate contexts:
  - **Background Service Worker**: Handles extension lifecycle, context menus, and message routing
  - **Content Scripts**: Runs in webpage context for DOM manipulation and content extraction
  - **Popup Interface**: React-based UI for user interaction and content display

### Browser Extension Components
- **Manifest V3 Compliance**: Modern extension architecture with enhanced security
- **Multi-browser Support**: Compatible with Chrome and Edge browsers
- **Permission Model**: Minimal permissions (activeTab, storage, scripting) for user privacy

## Key Components

### Content Extraction Engine
- **Smart Detection**: Identifies pet-related content using comprehensive keyword matching
- **Content Classification**: Categorizes content into types (medical, product, review, article, general pet-related)
- **DOM Analysis**: Extracts headings, metadata, and structured content from web pages
- **Real-time Processing**: Instant analysis and extraction on page load

### Content Processing
- **Keyword Highlighting**: 40+ pet industry keywords for content relevance scoring
- **Metadata Extraction**: Open Graph data, page metadata, and structured data collection
- **Content Sanitization**: Text cleaning and normalization for consistent output
- **Type Classification**: Automated content categorization based on medical, product, and other indicators

### User Interface Components
- **ExtractedContent**: Displays categorized content with badges and truncation
- **SoulvetLogo**: Custom SVG logo component with paw print design
- **UI Library**: Complete set of styled components (Button, Card, Badge, Tabs)
- **Responsive Design**: Optimized for extension popup constraints

### Utility Functions
- **Text Processing**: Sanitization, truncation, and formatting utilities
- **URL Validation**: Domain extraction and URL validation helpers
- **Debouncing**: Performance optimization for rapid content changes
- **Class Merging**: Tailwind CSS class combination utilities

## Data Flow

1. **Page Load**: Content script automatically analyzes page content
2. **Content Detection**: Scans DOM for pet-related keywords and content patterns
3. **Classification**: Categorizes content by type and relevance
4. **Storage**: Caches extracted data in Chrome storage for quick access
5. **UI Display**: Popup interface renders categorized content with metadata
6. **User Interaction**: Context menus and manual extraction triggers

### Message Passing
- Background ↔ Content Script: Content extraction requests and responses
- Popup ↔ Background: UI interactions and data retrieval
- Content Script → Background: Page change notifications and auto-extraction

## External Dependencies

### Core Dependencies
- **React 19**: Modern React with concurrent features
- **TypeScript 5.8**: Type safety and development tooling
- **Tailwind CSS 4.1**: Utility-first styling framework
- **Chrome Types**: Browser extension API type definitions

### Build Dependencies
- **Webpack 5**: Module bundling and asset processing
- **PostCSS**: CSS processing and autoprefixing
- **Copy Webpack Plugin**: Static asset copying
- **TS Loader**: TypeScript compilation in Webpack

### Utility Libraries
- **clsx & tailwind-merge**: CSS class management
- **Chrome Extension APIs**: Browser-specific functionality

## Deployment Strategy

### Development Build
- Source maps enabled for debugging
- Development mode webpack configuration
- Hot reloading not applicable (extension context)

### Distribution Preparation
1. **Build Process**: `npm run build` compiles TypeScript and processes assets
2. **Asset Copying**: Static files (manifest, icons, HTML) copied to dist/
3. **Extension Packaging**: Load unpacked for development, zip for distribution
4. **Browser Store Submission**: Chrome Web Store and Edge Add-ons

### File Structure
- `dist/`: Compiled extension files
- `src/`: Source TypeScript and React files
- `public/`: Static assets (icons, manifest)
- Build outputs: popup.js, content.js, background.js

## Recent Changes
- June 30, 2025: Complete browser extension build successfully compiled
- June 30, 2025: Fixed all TypeScript compilation errors
- June 30, 2025: Implemented functional tabs component with context API
- June 30, 2025: Created comprehensive README documentation for users and developers
- June 30, 2025: Extension ready for Chrome/Edge developer mode testing

## Project Status

**Current State**: ✅ READY FOR TESTING
- Extension builds successfully without errors
- All TypeScript compilation issues resolved
- Complete UI with SOULVET branding implemented
- Content extraction engine functional
- Comprehensive documentation completed

**Available for Testing**: Load the `dist/` folder as an unpacked extension in Chrome/Edge developer mode

## Changelog
- June 30, 2025: Initial setup and complete implementation

## User Preferences

Preferred communication style: Simple, everyday language.