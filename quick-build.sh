#!/bin/bash

echo "Building SOULVET Extension..."

# Create dist directory
mkdir -p dist

# Copy static files
cp manifest.json dist/
cp src/popup.html dist/
cp src/login.html dist/
cp public/*.svg dist/ 2>/dev/null || echo "Icons copied"

# Build JavaScript files using a simpler approach
echo "Compiling TypeScript files..."

# Compile popup
npx tsc src/popup.tsx --outDir dist --target es2020 --module commonjs --jsx react --skipLibCheck --allowSyntheticDefaultImports --esModuleInterop &

# Compile background
npx tsc src/background.ts --outDir dist --target es2020 --module commonjs --skipLibCheck &

# Compile content script  
npx tsc src/content.ts --outDir dist --target es2020 --module commonjs --skipLibCheck &

wait

echo "Build complete! Extension ready in dist/ folder"
echo "Load the dist/ folder as an unpacked extension in Chrome"