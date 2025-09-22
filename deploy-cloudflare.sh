#!/bin/bash

# NSY Tax Freelancer - Deployment Script for Cloudflare Pages
# This script handles the build and deployment process

echo "🚀 Starting NSY Tax Freelancer Deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate Prisma client (if needed)
echo "🔧 Generating Prisma client..."
npm run db:generate

# Build the application
echo "🏗️ Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Output directory: ./out"
    echo "🌐 Ready for Cloudflare Pages deployment"
else
    echo "❌ Build failed!"
    exit 1
fi

# Show build info
echo ""
echo "📋 Build Information:"
echo "- Project: NSY Tax Freelancer"
echo "- Framework: Next.js 15"
echo "- Export Mode: Static"
echo "- Output: ./out"
echo ""
echo "🎯 Next Steps:"
echo "1. Upload the './out' directory to Cloudflare Pages"
echo "2. Set build command to: npm run build"
echo "3. Set build output directory to: out"
echo "4. Set root directory to: / (if needed)"