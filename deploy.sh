#!/bin/bash

echo "🚀 Building Eurocert Anti-Bribery Platform..."

# Clean previous build
rm -rf dist

# Install dependencies
npm install

# Build the project
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output: dist/"
echo ""
echo "🌐 To deploy to Netlify:"
echo "1. Drag and drop the 'dist' folder to Netlify"
echo "2. Or use Netlify CLI: netlify deploy --prod --dir=dist"
echo ""
echo "📋 Media files are now included in the build:"
echo "✅ image (3).png - Company logo"
echo "✅ invideo-anti-bribery-compliance.mp4 - Hero video"
echo "✅ _redirects - SPA routing configuration"
echo ""
echo "🔧 Configuration files:"
echo "- netlify.toml (Netlify settings and MIME types)"
echo "- vite.config.ts (Build optimization)"
echo "- deploy-config.js (Environment configuration)"
echo ""
echo "⚠️  Note: Video file is large (231MB). Consider:"
echo "   - Using a CDN for video hosting"
echo "   - Compressing the video for web"
echo "   - Using a video streaming service" 