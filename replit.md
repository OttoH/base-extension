# SOULVET Content Extractor - Chrome/Edge Extension

## Overview

The SOULVET Content Extractor is a professional browser extension designed specifically for the pet industry. It enables veterinary professionals, pet care providers, and animal enthusiasts to extract and analyze pet-related content from web pages with smart detection and categorization capabilities.

The extension features a warm earth-tone design palette (#C4A484) that reflects the SOULVET brand identity and provides a clean, modern interface optimized for professional use.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript for type safety and modern development practices
- **Styling**: Material-UI (MUI) with custom SOULVET theme for consistent branding
- **Build System**: Webpack 5 with TypeScript compilation and CSS processing
- **UI Components**: Material-UI component library with custom SOULVET theme overrides

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
- **ExtractedContent**: Displays categorized content with MUI Chips and Cards
- **SoulvetLogo**: Custom SVG logo component with paw print design
- **MUI Theme**: Custom SOULVET theme with warm earth-tone color palette
- **Responsive Design**: Optimized for extension popup constraints using MUI breakpoints

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
- **Material-UI (MUI)**: Component library with theme system
- **Emotion**: CSS-in-JS styling for MUI components
- **Chrome Types**: Browser extension API type definitions

### Build Dependencies
- **Webpack 5**: Module bundling and asset processing
- **Copy Webpack Plugin**: Static asset copying
- **TS Loader**: TypeScript compilation in Webpack

### Utility Libraries
- **clsx**: CSS class management utility
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
- June 30, 2025: Added login page as initial screen with SOULVET branding
- June 30, 2025: Implemented multi-language support (English, Chinese, Japanese)
- June 30, 2025: Added authentication state management using Chrome storage
- June 30, 2025: Complete migration from Tailwind CSS to Material-UI (MUI)
- June 30, 2025: Created custom SOULVET theme with warm earth-tone color palette
- June 30, 2025: Updated all UI components to use MUI (Cards, Chips, Buttons, Tabs)
- June 30, 2025: Extension builds successfully with login flow integration
- June 30, 2025: Added medical task assignment form below Extract content section with Chinese labels
- June 30, 2025: Added logout button to header with functionality to return to login page

## Project Status

**Current State**: ✅ READY FOR TESTING
- Extension builds successfully with Material-UI integration
- Added login page as initial screen with SOULVET branding
- Enhanced error handling and debugging capabilities
- Complete UI with SOULVET branding using custom MUI theme
- Authentication flow using Chrome storage
- Multi-language support (English, Chinese, Japanese)

**Available for Testing**: Load the `dist/` folder as an unpacked extension in Chrome/Edge developer mode

## Changelog
- June 30, 2025: Initial setup and complete implementation

## User Preferences

Preferred communication style: Simple, everyday language.