/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ContentExtractor {
    static getInstance() {
        if (!ContentExtractor.instance) {
            ContentExtractor.instance = new ContentExtractor();
        }
        return ContentExtractor.instance;
    }
    // Listen for messages from the popup
    constructor() {
        this.debounceTimer = null;
        this.setupMessageListener();
        this.observePageChanges();
    }
    setupMessageListener() {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.action === 'extractContent') {
                const data = this.extractPageContent();
                sendResponse(data);
            }
            return true;
        });
    }
    observePageChanges() {
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
    notifyContentChange() {
        // Notify background script of content changes
        chrome.runtime.sendMessage({
            action: 'contentChanged',
            url: window.location.href
        });
    }
    extractPageContent() {
        const data = {
            url: window.location.href,
            title: document.title,
            headings: this.extractHeadings(),
            petRelatedContent: this.extractPetContent(),
            metadata: this.extractMetadata(),
            extractedAt: new Date().toISOString()
        };
        return data;
    }
    extractHeadings() {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        return Array.from(headings).map(heading => ({
            level: parseInt(heading.tagName.substring(1)),
            text: heading.textContent?.trim() || '',
            id: heading.id || ''
        }));
    }
    extractPetContent() {
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
        const petContent = [];
        elements.forEach((element, index) => {
            const text = element.textContent?.toLowerCase() || '';
            const originalText = element.textContent?.trim() || '';
            // Skip if text is too short or likely navigation/UI text
            if (originalText.length < 30 || originalText.length > 2000) {
                return;
            }
            const matchedKeywords = petKeywords.filter(keyword => text.includes(keyword.toLowerCase()));
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
    calculateRelevanceScore(text, keywords) {
        const words = text.split(/\s+/);
        const keywordMatches = keywords.filter(keyword => text.includes(keyword)).length;
        return keywordMatches / words.length;
    }
    determineContentType(element, keywords) {
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
    extractMetadata() {
        const metadata = {};
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
            }
            catch (e) {
                // Ignore invalid JSON
            }
        });
        return metadata;
    }
}
// Initialize content extractor
ContentExtractor.getInstance();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentExtractor);

/******/ })()
;
//# sourceMappingURL=content.js.map