# Deploying to GitHub Pages

Follow these steps to deploy your EfficiencyPro website to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "efficiency-pro")
4. Choose public or private visibility
5. Click "Create repository"

## Step 2: Upload Your Project

### Option 1: Using GitHub Desktop
1. Install [GitHub Desktop](https://desktop.github.com/)
2. Clone your new repository to your computer
3. Copy all project files to the cloned repository folder
4. Commit your changes and push to GitHub

### Option 2: Using Git Command Line
```bash
git clone https://github.com/yourusername/efficiency-pro.git
# Copy all files to the cloned directory
cd efficiency-pro
git add .
git commit -m "Initial commit"
git push origin main
```

## Step 3: Set Up GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "GitHub Pages" section
4. In the "Source" dropdown, select "GitHub Actions"
5. Choose the "Static HTML" workflow

## Step 4: Create GitHub Actions Workflow

Create a file named `.github/workflows/static.yml` in your repository with the following content:

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: './dist/public'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

## Step 5: Update Base Path for Routing

For client-side routing to work properly on GitHub Pages, you'll need to update your router to use the base path matching your repository name.

Edit `client/src/App.tsx` to update the router:

```jsx
<Router base="/your-repository-name">
  {/* Your routes */}
</Router>
```

## Step 6: Update Asset Paths

Make sure all your assets (images, videos, etc.) use relative paths or are properly prefixed with the base path of your repository.

## Additional Tips

- Add a `.nojekyll` file to the root of your project to prevent GitHub from processing your site with Jekyll
- Create a `404.html` file that redirects to your index.html for client-side routing support
- Consider using a custom domain by configuring it in the GitHub Pages settings

## Troubleshooting

If you encounter issues with the deployment:
- Check the Actions tab in your GitHub repository to see the workflow logs
- Ensure all paths in your code are relative
- Verify that all dependencies are properly listed in package.json