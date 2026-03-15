# Deploy to GitHub Pages 🚀

Follow these steps to deploy your Pill Tracker app to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" button in the top right and select "New repository"
3. Name your repository (e.g., `pill-tracker`)
4. Choose "Public" (required for free GitHub Pages)
5. Click "Create repository"

## Step 2: Push Your Code to GitHub

In your terminal, run these commands:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit: Pill Tracker app"

# Add your GitHub repository as remote (replace with your username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/pill-tracker.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top right)
3. Click "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically deploy your app!

## Step 4: Access Your App

After a few minutes, your app will be live at:

```
https://YOUR_USERNAME.github.io/pill-tracker/
```

## Automatic Deployments

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your app whenever you push to the `main` branch
- Deploy the built files to GitHub Pages
- Make your app accessible at the URL above

## Updating Your App

Whenever you want to update your app:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Actions will automatically rebuild and redeploy!

## Install on iPhone

Once deployed, you can:
1. Open the GitHub Pages URL in Safari on your iPhone
2. Tap the Share button
3. Select "Add to Home Screen"
4. Your app will work like a native iOS app!

## Custom Domain (Optional)

If you want to use a custom domain:
1. Go to your repository Settings → Pages
2. Enter your custom domain
3. Follow GitHub's instructions to configure DNS

---

## Troubleshooting

**App not loading?**
- Wait a few minutes for the deployment to complete
- Check the "Actions" tab in your repository for deployment status
- Make sure GitHub Pages is enabled in Settings → Pages

**Images or assets not loading?**
- Check the browser console for errors
- Ensure all assets are in the `/public` folder

**Need help?**
- Check the deployment status in the "Actions" tab
- Look for error messages in the build logs
