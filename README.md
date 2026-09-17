# 🎴 The Collective

> A college committee & student crew website featuring interactive trading cards, questline event progression, sub-team domains, and custom card minting.

## 🌐 Live Demo

**[View The Collective Live](YOUR_DEPLOYED_LINK_HERE)**

---

## ✨ Features

* **Tactical Member Roster** — Interactive trading cards with custom avatar SVGs, quirky stats, rarity tiers, and sound/doodle-inspired visual elements.
* **Questline Progression** — Track college event milestones, workshops, and symposium stages with live status badges.
* **Sub-Team Domains** — Explore and filter different committee domains including Tech, Design, Events, Media, and Logistics.
* **Card Minting Modal** — Create and customize new crew cards interactively in real time.
* **Neo-Brutalist Aesthetic** — Hard shadows, washi tape accents, drafting-grid patterns, and a tactile visual style.
* **Responsive Design** — Designed to work across desktop and mobile screen sizes.

---

## 🛠️ Built With

* **React 19**
* **TypeScript**
* **Vite**
* **Tailwind CSS v4**
* **Lucide React**
* **Motion**

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) v18 or higher
* npm

### 1. Clone the Repository

```bash
git clone https://github.com/vishnusumeshk2007-stack/blockshift-logicshiftr2.git
cd blockshift-logicshiftr2
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local development URL shown in your terminal, usually:

```text
http://localhost:5173
```

### 4. Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

### 5. Preview the Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

The project is deployed using **Netlify**.

### Automatic Deployment

The recommended deployment workflow is:

1. Push the project to GitHub.
2. Connect the GitHub repository to Netlify.
3. Set the build command to:

```text
npm run build
```

4. Set the publish directory to:

```text
dist
```

5. Deploy the site.

If a `netlify.toml` file is included in the repository, Netlify can use its configuration automatically.

### Manual Deployment

You can also create a production build locally:

```bash
npm run build
```

and deploy the generated `dist` folder using Netlify's manual deployment option.

---

## 📦 Project Structure

```text
The-Collective/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   └── ...
├── index.html
├── package.json
├── package-lock.json
├── vite.config.*
├── netlify.toml
└── README.md
```

> The exact structure may vary depending on the current implementation.

---

## 🎨 Design Concept

The Collective combines a **college committee dashboard** with the visual language of **collectibl**
