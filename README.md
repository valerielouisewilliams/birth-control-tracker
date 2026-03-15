# 💊 Pill Tracker

A beautiful, minimal iOS-style birth control pill tracker app. Track your daily pills, set reminders, and never miss a dose.

![Pill Tracker](https://img.shields.io/badge/iOS-Style-ec4899?style=for-the-badge&logo=apple)
![PWA](https://img.shields.io/badge/PWA-Enabled-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## ✨ Features

- 📱 **iOS-Native Design** - Authentic iOS styling with SF Pro-inspired typography
- 💊 **Visual Pill Pack** - Track 28 pills (21 active + 7 placebo)
- 📅 **Date Stamps** - See when you took each pill
- 🔔 **Daily Reminders** - Set custom notification times
- 📊 **Progress Tracking** - Visual progress bar
- 💾 **Local Storage** - All data stays private on your device
- 🌐 **Works Offline** - Progressive Web App (PWA)
- 📲 **Installable** - Add to iPhone home screen

## 🚀 Live Demo

**[Try it here!](#)** _(Add your GitHub Pages URL after deployment)_

## 📱 Install on iPhone

1. Open the app in Safari on your iPhone
2. Tap the Share button (⬆️)
3. Select "Add to Home Screen"
4. Tap "Add"

The app will now work like a native iOS app!

## 🛠️ Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Vite** - Build tool
- **date-fns** - Date formatting
- **Sonner** - Toast notifications

## 💻 Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 🌐 Deploy to GitHub Pages

See [DEPLOY_TO_GITHUB.md](./DEPLOY_TO_GITHUB.md) for detailed deployment instructions.

Quick steps:
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages with GitHub Actions
4. Your app will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

## 📂 Project Structure

```
pill-tracker/
├── src/
│   ├── app/
│   │   ├── App.tsx           # Main app component
│   │   └── components/
│   │       ├── PillPack.tsx  # Pill pack visualization
│   │       └── ReminderSettings.tsx
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── main.tsx
├── public/
│   ├── manifest.json          # PWA manifest
│   └── icon-*.png            # App icons
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions deployment
```

## 🔒 Privacy

All your data is stored locally in your browser's localStorage. Nothing is sent to any server. Your health data stays private and secure on your device.

## 📄 License

MIT License - feel free to use this for personal or commercial projects!

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## ⚠️ Disclaimer

This app is for tracking purposes only. It is not a substitute for medical advice. Always consult with your healthcare provider regarding birth control.

---

Made with 💕 using React and Tailwind CSS
