# 🎴 The Collective

> A college committee & student crew website featuring interactive trading cards, questline event progression, sub-team domains, and custom card minting.

---

## ✨ Features

- **Tactical Member Roster**: Interactive trading cards with custom avatar SVGs, quirky stats, rarity tiers, and sound/doodle motifs.
- **Questline Progression**: College event milestones, workshops, and symposium stages with live status badges.
- **Sub-Team Domains**: Filter and explore domains across Tech, Design, Events, Media, and Logistics.
- **Card Minting Modal**: Interactive creator to customize and add new crew cards in real-time.
- **Tactile Neo-Brutalist Aesthetic**: Hard shadows, washi tape accents, and drafting graph patterns.

---

## 🚀 Quick Start (Localhost)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Netlify

### Option 1: Automatic Continuous Deployment (via GitHub - Recommended)
1. Push this repository to GitHub (see instructions below).
2. Go to [Netlify](https://app.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub account and select this repository.
4. Netlify will auto-detect the configuration from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

### Option 2: Drag & Drop (Instant Manual Deploy)
1. Run `npm run build` locally.
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the Netlify Drop zone.

---

## 📦 Pushing to GitHub

To initialize git and publish to your GitHub:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage and commit files
git add .
git commit -m "feat: initial commit for The Collective website"

# 3. Rename branch to main
git branch -M main

# 4. Link your remote repository and push
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

---

## 🛠️ Built With

- **React 19** + **TypeScript**
- **Vite** (Blazing fast HMR and bundler)
- **Tailwind CSS v4**
- **Lucide React** (Tactical iconography)
- **Motion** (Smooth animations)

