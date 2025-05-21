#!/bin/bash

# Script to build and prepare the project for GitHub Pages

# Build the project
echo "Building the project..."
npm run build

# Create a .nojekyll file to prevent GitHub from processing the site with Jekyll
touch dist/.nojekyll

# Copy the index.html to 404.html for client-side routing
cp dist/public/index.html dist/public/404.html

echo "Build completed! Your site is ready for GitHub Pages deployment."
echo "Upload the contents of the dist/public directory to your GitHub Pages repository."