# 🚀 Quick Start Guide

Get your Pill Tracker app live on GitHub Pages in 5 minutes!

## Prerequisites

- A GitHub account ([sign up here](https://github.com/join))
- Git installed on your computer ([download here](https://git-scm.com/downloads))

## Step-by-Step Deployment

### 1️⃣ Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `pill-tracker` (or any name you like)
3. Make it **Public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license
5. Click "Create repository"

### 2️⃣ Push Your Code

Open your terminal in this project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Pill Tracker app"

# Connect to your GitHub repository
# Replace YOUR_USERNAME and pill-tracker with your info
git remote add origin https://github.com/YOUR_USERNAME/pill-tracker.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3️⃣ Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**
4. That's it! The workflow will start automatically

### 4️⃣ Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a "Deploy to GitHub Pages" workflow running
3. Wait 2-3 minutes for it to complete (green checkmark ✅)

### 5️⃣ Access Your App!

Your app is now live at:

```
https://YOUR_USERNAME.github.io/pill-tracker/
```

## 📱 Install on Your iPhone

1. Open the URL above in **Safari** on your iPhone
2. Tap the **Share** button (⬆️)
3. Scroll and tap **Add to Home Screen**
4. Tap **Add**
5. You now have a native-looking pill tracker app! 🎉

## 🔄 Making Updates

Whenever you want to update your app:

```bash
# Make your changes to the code

# Commit the changes
git add .
git commit -m "Describe your changes here"

# Push to GitHub
git push
```

The app will automatically rebuild and redeploy in 2-3 minutes!

## 🎨 Customization Ideas

- Change the color scheme in `/src/app/components/`
- Adjust reminder time defaults
- Add more features like cycle tracking
- Customize the app name in `/public/manifest.json`

## ❓ Troubleshooting

**"App not loading" or "404 error":**
- Wait a few minutes for deployment to complete
- Check the Actions tab for any errors
- Make sure GitHub Pages is set to "GitHub Actions" mode

**"Images not showing":**
- Check that all files in `/public` are committed to git
- Look at browser console for 404 errors

**"Can't push to GitHub":**
- Make sure you've created the repository on GitHub
- Check that you've replaced YOUR_USERNAME with your actual username
- Verify you're connected to the internet

**Need more help?**
- Check [DEPLOY_TO_GITHUB.md](./DEPLOY_TO_GITHUB.md) for detailed instructions
- Check [INSTALL_ON_IPHONE.md](./INSTALL_ON_IPHONE.md) for iOS installation help

## 🎉 You're Done!

Congratulations! Your pill tracker is now:
- ✅ Live on the internet
- ✅ Accessible from any device
- ✅ Installable as an iOS app
- ✅ Automatically deployed on every update

---

**Questions?** Open an issue on GitHub or check the documentation files in this repository.
