/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/globals.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/globals.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* SOULVET Color Palette - Warm Earth Tones */
  --soulvet-primary: #C4A484;
  --soulvet-secondary: #A68A6A;
  --soulvet-accent: #8B6F3F;
  --soulvet-brown: #6B5B3F;
  --soulvet-dark: #4A3D2A;
  --soulvet-light: #E8DDD0;
  --soulvet-cream: #F5F2ED;
  --soulvet-warm: #D4B896;
}

/* Base styles */
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--soulvet-cream);
  color: var(--soulvet-dark);
  margin: 0;
  padding: 0;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--soulvet-light);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: var(--soulvet-brown);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--soulvet-accent);
}

/* Utility classes for SOULVET theme */
.text-soulvet-primary { color: var(--soulvet-primary); }
.text-soulvet-secondary { color: var(--soulvet-secondary); }
.text-soulvet-accent { color: var(--soulvet-accent); }
.text-soulvet-brown { color: var(--soulvet-brown); }
.text-soulvet-dark { color: var(--soulvet-dark); }

.bg-soulvet-primary { background-color: var(--soulvet-primary); }
.bg-soulvet-secondary { background-color: var(--soulvet-secondary); }
.bg-soulvet-accent { background-color: var(--soulvet-accent); }
.bg-soulvet-brown { background-color: var(--soulvet-brown); }
.bg-soulvet-dark { background-color: var(--soulvet-dark); }
.bg-soulvet-light { background-color: var(--soulvet-light); }
.bg-soulvet-cream { background-color: var(--soulvet-cream); }
.bg-soulvet-warm { background-color: var(--soulvet-warm); }

.border-soulvet-primary { border-color: var(--soulvet-primary); }
.border-soulvet-brown { border-color: var(--soulvet-brown); }
.border-soulvet-accent { border-color: var(--soulvet-accent); }

/* Hover states */
.hover\\:bg-soulvet-primary\\/90:hover { background-color: rgba(196, 164, 132, 0.9); }
.hover\\:bg-soulvet-accent\\/90:hover { background-color: rgba(139, 111, 63, 0.9); }
.hover\\:bg-soulvet-light:hover { background-color: var(--soulvet-light); }

/* Focus states */
.focus-visible\\:ring-soulvet-primary:focus-visible { 
  --tw-ring-color: var(--soulvet-primary);
}

/* Animation for paw prints */
@keyframes pawPrint {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.animate-paw {
  animation: pawPrint 2s ease-in-out infinite;
}

/* Custom button variants */
.btn-soulvet {
  background-color: var(--soulvet-primary);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-soulvet:hover {
  background-color: var(--soulvet-accent);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(139, 111, 63, 0.2);
}

.btn-soulvet:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(139, 111, 63, 0.2);
}

/* Card enhancements */
.card-soulvet {
  background: white;
  border: 1px solid rgba(107, 91, 63, 0.1);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(139, 111, 63, 0.1);
  transition: all 0.2s ease;
}

.card-soulvet:hover {
  box-shadow: 0 4px 12px rgba(139, 111, 63, 0.15);
  transform: translateY(-1px);
}

/* Badge enhancements */
.badge-soulvet {
  background-color: var(--soulvet-light);
  color: var(--soulvet-brown);
  border: 1px solid rgba(107, 91, 63, 0.2);
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
}

/* Loading spinner */
.spinner-soulvet {
  border: 2px solid var(--soulvet-light);
  border-top: 2px solid var(--soulvet-primary);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Typography */
.heading-soulvet {
  color: var(--soulvet-brown);
  font-weight: 600;
  line-height: 1.2;
}

.text-soulvet {
  color: var(--soulvet-dark);
  line-height: 1.5;
}

.text-muted-soulvet {
  color: rgba(107, 91, 63, 0.7);
}

/* Special paw print pattern background */
.bg-paw-pattern {
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(196, 164, 132, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 40% 60%, rgba(196, 164, 132, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(196, 164, 132, 0.1) 1px, transparent 1px);
  background-size: 40px 40px, 60px 60px, 50px 50px;
}

/* Extension popup specific styles */
.extension-popup {
  width: 384px;
  min-height: 500px;
  max-height: 600px;
  font-size: 14px;
}

.extension-popup .card {
  box-shadow: none;
  border: 1px solid rgba(107, 91, 63, 0.1);
}

.extension-popup .scrollable {
  max-height: 300px;
  overflow-y: auto;
}

/* Responsive text sizes for extension */
.extension-popup h1 { font-size: 18px; }
.extension-popup h2 { font-size: 16px; }
.extension-popup h3 { font-size: 14px; }
.extension-popup p { font-size: 12px; }
.extension-popup .text-xs { font-size: 10px; }
.extension-popup .text-sm { font-size: 11px; }

/* Highlight styles for extracted content */
mark.highlight-soulvet {
  background-color: rgba(196, 164, 132, 0.2);
  color: var(--soulvet-accent);
  padding: 1px 2px;
  border-radius: 2px;
}

/* Error states */
.error-soulvet {
  color: #dc2626;
  background-color: #fef2f2;
  border-color: #fecaca;
}

/* Success states */
.success-soulvet {
  color: #059669;
  background-color: #f0fdf4;
  border-color: #bbf7d0;
}

/* Warning states */
.warning-soulvet {
  color: var(--soulvet-accent);
  background-color: var(--soulvet-light);
  border-color: var(--soulvet-primary);
}
`, "",{"version":3,"sources":["webpack://./src/globals.css"],"names":[],"mappings":"AAAA,cAAc;AACd,oBAAoB;AACpB,mBAAmB;;AAEnB;EACE,6CAA6C;EAC7C,0BAA0B;EAC1B,4BAA4B;EAC5B,yBAAyB;EACzB,wBAAwB;EACxB,uBAAuB;EACvB,wBAAwB;EACxB,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA,gBAAgB;AAChB;EACE,sBAAsB;AACxB;;AAEA;EACE;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;EAClC,sCAAsC;EACtC,0BAA0B;EAC1B,SAAS;EACT,UAAU;AACZ;;AAEA,qBAAqB;AACrB;EACE,UAAU;AACZ;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;AACnC;;AAEA,sCAAsC;AACtC,wBAAwB,6BAA6B,EAAE;AACvD,0BAA0B,+BAA+B,EAAE;AAC3D,uBAAuB,4BAA4B,EAAE;AACrD,sBAAsB,2BAA2B,EAAE;AACnD,qBAAqB,0BAA0B,EAAE;;AAEjD,sBAAsB,wCAAwC,EAAE;AAChE,wBAAwB,0CAA0C,EAAE;AACpE,qBAAqB,uCAAuC,EAAE;AAC9D,oBAAoB,sCAAsC,EAAE;AAC5D,mBAAmB,qCAAqC,EAAE;AAC1D,oBAAoB,sCAAsC,EAAE;AAC5D,oBAAoB,sCAAsC,EAAE;AAC5D,mBAAmB,qCAAqC,EAAE;;AAE1D,0BAA0B,oCAAoC,EAAE;AAChE,wBAAwB,kCAAkC,EAAE;AAC5D,yBAAyB,mCAAmC,EAAE;;AAE9D,iBAAiB;AACjB,uCAAuC,0CAA0C,EAAE;AACnF,sCAAsC,yCAAyC,EAAE;AACjF,iCAAiC,sCAAsC,EAAE;;AAEzE,iBAAiB;AACjB;EACE,uCAAuC;AACzC;;AAEA,6BAA6B;AAC7B;EACE,WAAW,mBAAmB,EAAE;EAChC,MAAM,qBAAqB,EAAE;AAC/B;;AAEA;EACE,2CAA2C;AAC7C;;AAEA,2BAA2B;AAC3B;EACE,wCAAwC;EACxC,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,uCAAuC;EACvC,2BAA2B;EAC3B,6CAA6C;AAC/C;;AAEA;EACE,wBAAwB;EACxB,6CAA6C;AAC/C;;AAEA,sBAAsB;AACtB;EACE,iBAAiB;EACjB,wCAAwC;EACxC,kBAAkB;EAClB,6CAA6C;EAC7C,yBAAyB;AAC3B;;AAEA;EACE,+CAA+C;EAC/C,2BAA2B;AAC7B;;AAEA,uBAAuB;AACvB;EACE,sCAAsC;EACtC,2BAA2B;EAC3B,wCAAwC;EACxC,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,sCAAsC;EACtC,4CAA4C;EAC5C,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC;;AAEA,eAAe;AACf;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA,yCAAyC;AACzC;EACE;;;qFAGmF;EACnF,gDAAgD;AAClD;;AAEA,oCAAoC;AACpC;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,wCAAwC;AACxC,sBAAsB,eAAe,EAAE;AACvC,sBAAsB,eAAe,EAAE;AACvC,sBAAsB,eAAe,EAAE;AACvC,qBAAqB,eAAe,EAAE;AACtC,4BAA4B,eAAe,EAAE;AAC7C,4BAA4B,eAAe,EAAE;;AAE7C,2CAA2C;AAC3C;EACE,0CAA0C;EAC1C,4BAA4B;EAC5B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA,mBAAmB;AACnB;EACE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA,mBAAmB;AACnB;EACE,4BAA4B;EAC5B,sCAAsC;EACtC,oCAAoC;AACtC","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n  /* SOULVET Color Palette - Warm Earth Tones */\n  --soulvet-primary: #C4A484;\n  --soulvet-secondary: #A68A6A;\n  --soulvet-accent: #8B6F3F;\n  --soulvet-brown: #6B5B3F;\n  --soulvet-dark: #4A3D2A;\n  --soulvet-light: #E8DDD0;\n  --soulvet-cream: #F5F2ED;\n  --soulvet-warm: #D4B896;\n}\n\n/* Base styles */\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: var(--soulvet-cream);\n  color: var(--soulvet-dark);\n  margin: 0;\n  padding: 0;\n}\n\n/* Custom scrollbar */\n::-webkit-scrollbar {\n  width: 6px;\n}\n\n::-webkit-scrollbar-track {\n  background: var(--soulvet-light);\n  border-radius: 3px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--soulvet-brown);\n  border-radius: 3px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--soulvet-accent);\n}\n\n/* Utility classes for SOULVET theme */\n.text-soulvet-primary { color: var(--soulvet-primary); }\n.text-soulvet-secondary { color: var(--soulvet-secondary); }\n.text-soulvet-accent { color: var(--soulvet-accent); }\n.text-soulvet-brown { color: var(--soulvet-brown); }\n.text-soulvet-dark { color: var(--soulvet-dark); }\n\n.bg-soulvet-primary { background-color: var(--soulvet-primary); }\n.bg-soulvet-secondary { background-color: var(--soulvet-secondary); }\n.bg-soulvet-accent { background-color: var(--soulvet-accent); }\n.bg-soulvet-brown { background-color: var(--soulvet-brown); }\n.bg-soulvet-dark { background-color: var(--soulvet-dark); }\n.bg-soulvet-light { background-color: var(--soulvet-light); }\n.bg-soulvet-cream { background-color: var(--soulvet-cream); }\n.bg-soulvet-warm { background-color: var(--soulvet-warm); }\n\n.border-soulvet-primary { border-color: var(--soulvet-primary); }\n.border-soulvet-brown { border-color: var(--soulvet-brown); }\n.border-soulvet-accent { border-color: var(--soulvet-accent); }\n\n/* Hover states */\n.hover\\:bg-soulvet-primary\\/90:hover { background-color: rgba(196, 164, 132, 0.9); }\n.hover\\:bg-soulvet-accent\\/90:hover { background-color: rgba(139, 111, 63, 0.9); }\n.hover\\:bg-soulvet-light:hover { background-color: var(--soulvet-light); }\n\n/* Focus states */\n.focus-visible\\:ring-soulvet-primary:focus-visible { \n  --tw-ring-color: var(--soulvet-primary);\n}\n\n/* Animation for paw prints */\n@keyframes pawPrint {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n}\n\n.animate-paw {\n  animation: pawPrint 2s ease-in-out infinite;\n}\n\n/* Custom button variants */\n.btn-soulvet {\n  background-color: var(--soulvet-primary);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 8px 16px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n\n.btn-soulvet:hover {\n  background-color: var(--soulvet-accent);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(139, 111, 63, 0.2);\n}\n\n.btn-soulvet:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(139, 111, 63, 0.2);\n}\n\n/* Card enhancements */\n.card-soulvet {\n  background: white;\n  border: 1px solid rgba(107, 91, 63, 0.1);\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(139, 111, 63, 0.1);\n  transition: all 0.2s ease;\n}\n\n.card-soulvet:hover {\n  box-shadow: 0 4px 12px rgba(139, 111, 63, 0.15);\n  transform: translateY(-1px);\n}\n\n/* Badge enhancements */\n.badge-soulvet {\n  background-color: var(--soulvet-light);\n  color: var(--soulvet-brown);\n  border: 1px solid rgba(107, 91, 63, 0.2);\n  border-radius: 12px;\n  padding: 2px 8px;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n/* Loading spinner */\n.spinner-soulvet {\n  border: 2px solid var(--soulvet-light);\n  border-top: 2px solid var(--soulvet-primary);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* Typography */\n.heading-soulvet {\n  color: var(--soulvet-brown);\n  font-weight: 600;\n  line-height: 1.2;\n}\n\n.text-soulvet {\n  color: var(--soulvet-dark);\n  line-height: 1.5;\n}\n\n.text-muted-soulvet {\n  color: rgba(107, 91, 63, 0.7);\n}\n\n/* Special paw print pattern background */\n.bg-paw-pattern {\n  background-image: \n    radial-gradient(circle at 20% 20%, rgba(196, 164, 132, 0.1) 1px, transparent 1px),\n    radial-gradient(circle at 40% 60%, rgba(196, 164, 132, 0.1) 1px, transparent 1px),\n    radial-gradient(circle at 80% 40%, rgba(196, 164, 132, 0.1) 1px, transparent 1px);\n  background-size: 40px 40px, 60px 60px, 50px 50px;\n}\n\n/* Extension popup specific styles */\n.extension-popup {\n  width: 384px;\n  min-height: 500px;\n  max-height: 600px;\n  font-size: 14px;\n}\n\n.extension-popup .card {\n  box-shadow: none;\n  border: 1px solid rgba(107, 91, 63, 0.1);\n}\n\n.extension-popup .scrollable {\n  max-height: 300px;\n  overflow-y: auto;\n}\n\n/* Responsive text sizes for extension */\n.extension-popup h1 { font-size: 18px; }\n.extension-popup h2 { font-size: 16px; }\n.extension-popup h3 { font-size: 14px; }\n.extension-popup p { font-size: 12px; }\n.extension-popup .text-xs { font-size: 10px; }\n.extension-popup .text-sm { font-size: 11px; }\n\n/* Highlight styles for extracted content */\nmark.highlight-soulvet {\n  background-color: rgba(196, 164, 132, 0.2);\n  color: var(--soulvet-accent);\n  padding: 1px 2px;\n  border-radius: 2px;\n}\n\n/* Error states */\n.error-soulvet {\n  color: #dc2626;\n  background-color: #fef2f2;\n  border-color: #fecaca;\n}\n\n/* Success states */\n.success-soulvet {\n  color: #059669;\n  background-color: #f0fdf4;\n  border-color: #bbf7d0;\n}\n\n/* Warning states */\n.warning-soulvet {\n  color: var(--soulvet-accent);\n  background-color: var(--soulvet-light);\n  border-color: var(--soulvet-primary);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/ExtractedContent.tsx":
/*!*********************************************!*\
  !*** ./src/components/ExtractedContent.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtractedContent: () => (/* binding */ ExtractedContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _ui_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/badge */ "./src/components/ui/badge.tsx");
/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/card */ "./src/components/ui/card.tsx");



const ExtractedContent = ({ data }) => {
    const getContentTypeColor = (type) => {
        switch (type) {
            case 'medical':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'product':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'review':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'article':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            default:
                return 'bg-soulvet-light text-soulvet-brown border-soulvet-brown/20';
        }
    };
    const truncateText = (text, maxLength = 150) => {
        if (text.length <= maxLength)
            return text;
        return text.substring(0, maxLength) + '...';
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "space-y-4 max-h-96 overflow-y-auto", children: [data.headings.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, { className: "border-soulvet-brown/10", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, { className: "pb-2", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, { className: "text-sm text-soulvet-brown", children: ["Page Headings (", data.headings.length, ")"] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, { className: "space-y-2", children: [data.headings.slice(0, 5).map((heading, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex items-center gap-2", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, { variant: "outline", className: "text-xs", children: ["H", heading.level] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text-xs text-soulvet-brown/80 truncate", children: heading.text })] }, index))), data.headings.length > 5 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: "text-xs text-soulvet-brown/60", children: ["...and ", data.headings.length - 5, " more"] }))] })] })), data.petRelatedContent.length > 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "space-y-3", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", { className: "text-sm font-medium text-soulvet-brown", children: ["Pet-Related Content (", data.petRelatedContent.length, ")"] }), data.petRelatedContent.map((content, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, { className: "border-soulvet-brown/10", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, { className: "p-3 space-y-2", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex items-center justify-between", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, { variant: "outline", className: `text-xs ${getContentTypeColor(content.type)}`, children: content.type }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, { variant: "secondary", className: "text-xs", children: content.tagName })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "text-xs text-soulvet-brown/80 leading-relaxed", children: truncateText(content.text) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex flex-wrap gap-1", children: [content.keywords.slice(0, 4).map((keyword, keyIndex) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, { className: "text-xs bg-soulvet-accent/10 text-soulvet-accent", children: keyword }, keyIndex))), content.keywords.length > 4 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, { className: "text-xs bg-soulvet-accent/10 text-soulvet-accent", children: ["+", content.keywords.length - 4] }))] })] }) }, content.id)))] })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, { className: "border-soulvet-brown/10", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, { className: "p-4 text-center", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "text-soulvet-brown/60", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { className: "w-8 h-8 mx-auto mb-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "text-sm", children: "No pet-related content found" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "text-xs mt-1", children: "Try visiting a pet, veterinary, or animal-related website" })] }) }) }))] }));
};


/***/ }),

/***/ "./src/components/SoulvetLogo.tsx":
/*!****************************************!*\
  !*** ./src/components/SoulvetLogo.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoulvetLogo: () => (/* binding */ SoulvetLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const SoulvetLogo = ({ size = 24, className = '' }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "6", cy: "6", r: "2", fill: "currentColor" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "12", cy: "4.5", r: "2", fill: "currentColor" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "18", cy: "6", r: "2", fill: "currentColor" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "12", cy: "12", r: "4", fill: "currentColor" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", { x: "12", y: "20", textAnchor: "middle", fontSize: "4", fontWeight: "bold", fill: "currentColor", fontFamily: "Arial, sans-serif", children: "SV" })] }));
};


/***/ }),

/***/ "./src/components/ui/badge.tsx":
/*!*************************************!*\
  !*** ./src/components/ui/badge.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/utils */ "./src/lib/utils.ts");


function Badge({ className, variant = 'default', ...props }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', {
            'border-transparent bg-soulvet-primary text-white': variant === 'default',
            'border-transparent bg-soulvet-light text-soulvet-brown': variant === 'secondary',
            'border-transparent bg-destructive text-destructive-foreground': variant === 'destructive',
            'border-soulvet-brown/30 text-soulvet-brown': variant === 'outline',
        }, className), ...props }));
}



/***/ }),

/***/ "./src/components/ui/button.tsx":
/*!**************************************!*\
  !*** ./src/components/ui/button.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/utils */ "./src/lib/utils.ts");



const Button = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-soulvet-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background', {
            'bg-soulvet-primary text-white hover:bg-soulvet-primary/90': variant === 'default',
            'bg-destructive text-destructive-foreground hover:bg-destructive/90': variant === 'destructive',
            'border border-soulvet-brown/30 bg-background hover:bg-soulvet-light hover:text-soulvet-brown': variant === 'outline',
            'bg-soulvet-light text-soulvet-brown hover:bg-soulvet-light/80': variant === 'secondary',
            'hover:bg-soulvet-light hover:text-soulvet-brown': variant === 'ghost',
            'text-soulvet-primary underline-offset-4 hover:underline': variant === 'link',
        }, {
            'h-10 py-2 px-4': size === 'default',
            'h-9 px-3 rounded-md': size === 'sm',
            'h-11 px-8 rounded-md': size === 'lg',
            'h-10 w-10': size === 'icon',
        }, className), ref: ref, ...props }));
});
Button.displayName = 'Button';



/***/ }),

/***/ "./src/components/ui/card.tsx":
/*!************************************!*\
  !*** ./src/components/ui/card.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   CardContent: () => (/* binding */ CardContent),
/* harmony export */   CardDescription: () => (/* binding */ CardDescription),
/* harmony export */   CardFooter: () => (/* binding */ CardFooter),
/* harmony export */   CardHeader: () => (/* binding */ CardHeader),
/* harmony export */   CardTitle: () => (/* binding */ CardTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/utils */ "./src/lib/utils.ts");



const Card = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, ...props }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('rounded-lg border border-soulvet-brown/20 bg-white text-soulvet-dark shadow-sm', className), ...props })));
Card.displayName = 'Card';
const CardHeader = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, ...props }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('flex flex-col space-y-1.5 p-6', className), ...props })));
CardHeader.displayName = 'CardHeader';
const CardTitle = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, ...props }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('text-2xl font-semibold leading-none tracking-tight', className), ...props })));
CardTitle.displayName = 'CardTitle';
const CardDescription = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, ...props }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('text-sm text-muted-foreground', className), ...props })));
CardDescription.displayName = 'CardDescription';
const CardContent = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, ...props }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('p-6 pt-0', className), ...props })));
CardContent.displayName = 'CardContent';
const CardFooter = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, ...props }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('flex items-center p-6 pt-0', className), ...props })));
CardFooter.displayName = 'CardFooter';



/***/ }),

/***/ "./src/components/ui/tabs.tsx":
/*!************************************!*\
  !*** ./src/components/ui/tabs.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tabs: () => (/* binding */ Tabs),
/* harmony export */   TabsContent: () => (/* binding */ TabsContent),
/* harmony export */   TabsList: () => (/* binding */ TabsList),
/* harmony export */   TabsTrigger: () => (/* binding */ TabsTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/utils */ "./src/lib/utils.ts");



const TabsContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const Tabs = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, defaultValue = '', value, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
    const currentValue = value !== undefined ? value : internalValue;
    const handleValueChange = onValueChange || setInternalValue;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabsContext.Provider, { value: { value: currentValue, onValueChange: handleValueChange }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('w-full', className), ...props, children: children }) }));
});
Tabs.displayName = 'Tabs';
const TabsList = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, ...props }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('inline-flex h-10 items-center justify-center rounded-md bg-soulvet-light p-1 text-soulvet-brown', className), ...props })));
TabsList.displayName = 'TabsList';
const TabsTrigger = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, value, onClick, ...props }, ref) => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabsContext);
    if (!context) {
        throw new Error('TabsTrigger must be used within Tabs');
    }
    const isActive = context.value === value;
    const handleClick = (e) => {
        context.onValueChange(value);
        onClick?.(e);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', isActive ? 'bg-white text-soulvet-brown shadow-sm' : '', className), onClick: handleClick, ...props }));
});
TabsTrigger.displayName = 'TabsTrigger';
const TabsContent = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className, value, children, ...props }, ref) => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabsContext);
    if (!context) {
        throw new Error('TabsContent must be used within Tabs');
    }
    if (context.value !== value) {
        return null;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className), ...props, children: children }));
});
TabsContent.displayName = 'TabsContent';



/***/ }),

/***/ "./src/globals.css":
/*!*************************!*\
  !*** ./src/globals.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./globals.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/globals.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   extractDomain: () => (/* binding */ extractDomain),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   highlightKeywords: () => (/* binding */ highlightKeywords),
/* harmony export */   isValidUrl: () => (/* binding */ isValidUrl),
/* harmony export */   sanitizeText: () => (/* binding */ sanitizeText),
/* harmony export */   truncateText: () => (/* binding */ truncateText)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function formatDate(date) {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleString();
}
function truncateText(text, maxLength) {
    if (text.length <= maxLength)
        return text;
    return text.substring(0, maxLength) + '...';
}
function debounce(func, wait) {
    let timeout = null;
    return (...args) => {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => func(...args), wait);
    };
}
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    }
    catch (_) {
        return false;
    }
}
function extractDomain(url) {
    try {
        return new URL(url).hostname;
    }
    catch (_) {
        return '';
    }
}
function sanitizeText(text) {
    // Remove excessive whitespace and line breaks
    return text
        .replace(/\s+/g, ' ')
        .replace(/\n\s*\n/g, '\n')
        .trim();
}
function highlightKeywords(text, keywords) {
    let highlightedText = text;
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        highlightedText = highlightedText.replace(regex, `<mark class="bg-soulvet-accent/20 text-soulvet-accent">${keyword}</mark>`);
    });
    return highlightedText;
}


/***/ }),

/***/ "./src/popup.tsx":
/*!***********************!*\
  !*** ./src/popup.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ui/button */ "./src/components/ui/button.tsx");
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ui/card */ "./src/components/ui/card.tsx");
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ui/badge */ "./src/components/ui/badge.tsx");
/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ui/tabs */ "./src/components/ui/tabs.tsx");
/* harmony import */ var _components_ExtractedContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ExtractedContent */ "./src/components/ExtractedContent.tsx");
/* harmony import */ var _components_SoulvetLogo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SoulvetLogo */ "./src/components/SoulvetLogo.tsx");
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./globals.css */ "./src/globals.css");










const Popup = () => {
    const [extractedData, setExtractedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isExtracting, setIsExtracting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentUrl, setCurrentUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-96 min-h-[500px] bg-soulvet-cream", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, { className: "border-soulvet-brown/20", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, { className: "bg-soulvet-primary text-white", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex items-center gap-3", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SoulvetLogo__WEBPACK_IMPORTED_MODULE_8__.SoulvetLogo, { size: 32 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardTitle, { className: "text-lg", children: "SOULVET" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardDescription, { className: "text-soulvet-cream/80", children: "Content Extractor" })] })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, { className: "p-4 space-y-4", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "space-y-2", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "text-sm text-soulvet-brown/70", children: "Current Page:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "text-xs font-mono bg-soulvet-light p-2 rounded break-all", children: currentUrl || 'Loading...' })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex gap-2", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: handleExtractContent, disabled: isExtracting, className: "flex-1 bg-soulvet-accent hover:bg-soulvet-accent/90", children: isExtracting ? 'Extracting...' : 'Extract Content' }), extractedData && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: handleClearData, variant: "outline", className: "border-soulvet-brown/30 text-soulvet-brown hover:bg-soulvet-light", children: "Clear" }))] }), extractedData && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__.Tabs, { defaultValue: "overview", className: "mt-4", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsList, { className: "grid w-full grid-cols-3 bg-soulvet-light", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsTrigger, { value: "overview", className: "text-xs", children: "Overview" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsTrigger, { value: "content", className: "text-xs", children: "Content" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsTrigger, { value: "metadata", className: "text-xs", children: "Meta" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsContent, { value: "overview", className: "mt-4 space-y-3", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "space-y-2", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex justify-between items-center", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text-sm font-medium", children: "Headings Found:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, { variant: "secondary", children: extractedData.headings.length })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex justify-between items-center", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text-sm font-medium", children: "Pet Content:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, { variant: "secondary", className: "bg-soulvet-accent/10 text-soulvet-accent", children: extractedData.petRelatedContent.length })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex justify-between items-center", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text-sm font-medium", children: "Extracted:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "text-xs text-soulvet-brown/60", children: new Date(extractedData.extractedAt).toLocaleTimeString() })] })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsContent, { value: "content", className: "mt-4", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ExtractedContent__WEBPACK_IMPORTED_MODULE_7__.ExtractedContent, { data: extractedData }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsContent, { value: "metadata", className: "mt-4", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "space-y-2 max-h-60 overflow-y-auto", children: Object.entries(extractedData.metadata).map(([key, value]) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "text-xs border-b border-soulvet-brown/10 pb-1", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "font-medium text-soulvet-brown", children: [key, ":"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "text-soulvet-brown/70 break-words", children: value })] }, key))) }) })] }))] })] }) }));
};
// Initialize the popup
const container = document.getElementById('root');
if (container) {
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Popup, {}));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkworkspace"] = self["webpackChunkworkspace"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map