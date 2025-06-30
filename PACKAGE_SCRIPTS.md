# Package.json Scripts Setup

Since package.json cannot be modified directly in this environment, here are the scripts that should be added to your package.json file:

## Required Scripts Section

Add this to your package.json:

```json
{
  "name": "soulvet-content-extractor",
  "version": "1.0.0",
  "description": "A professional browser extension designed for the pet industry",
  "main": "webpack.config.js",
  "scripts": {
    "build": "node scripts/build.js",
    "dev": "node scripts/dev.js",
    "webpack:build": "npx webpack --mode=production",
    "webpack:dev": "npx webpack --mode=development --watch",
    "type-check": "npx tsc --noEmit",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["browser-extension", "pet-industry", "content-extraction", "veterinary"],
  "author": "SOULVET",
  "license": "PROPRIETARY",
  "dependencies": {
    "@types/chrome": "^0.0.328",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "autoprefixer": "^10.4.21",
    "clsx": "^2.1.1",
    "copy-webpack-plugin": "^13.0.0",
    "css-loader": "^7.1.2",
    "postcss-loader": "^8.1.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "style-loader": "^4.0.0",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.11",
    "ts-loader": "^9.5.2",
    "typescript": "^5.8.3",
    "webpack": "^5.99.9",
    "webpack-cli": "^6.0.1"
  }
}
```

## Usage

After adding these scripts to package.json, you can use:

- `npm run build` - Production build
- `npm run dev` - Development with watch mode
- `npm run type-check` - TypeScript validation
- `npm run webpack:build` - Direct webpack production build
- `npm run webpack:dev` - Direct webpack development build

## Current Workaround

Until package.json is updated, use these commands:

- `node scripts/build.js` - Production build
- `node scripts/dev.js` - Development build
- `npx webpack --mode=production` - Direct webpack build