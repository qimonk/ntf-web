#!/bin/bash

# NSY Tax Freelancer Deployment Script
# This script prepares the project for Cloudflare Pages deployment

echo "🚀 Starting NSY Tax Freelancer deployment preparation..."

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

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in 'out/' directory"
    echo ""
    echo "🌐 Ready for Cloudflare Pages deployment!"
    echo ""
    echo "Deployment settings:"
    echo "- Build command: npm run build"
    echo "- Output directory: out"
    echo "- Root directory: /"
    echo ""
    echo "📋 Generated pages:"
    ls -la out/ | grep "^d" | awk '{print "- " $9}'
else
    echo "❌ Build failed! Please check the error messages above."
    exit 1
fi