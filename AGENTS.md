# br1dge-age

## Overview
Static website that displays br1dge's L1 blockchain age (time since first Ethereum transaction) with a word cloud visualization. Fetches transaction data from Etherscan API and shows total transaction count.

**Status:** Maintenance mode  
**URL:** https://birth.br1dge.xyz  
**Deployment:** GitHub Pages (via GitHub Actions)

## Tech Stack
- **Build:** Vite 5.x
- **Language:** Vanilla JavaScript (ES Modules)
- **Styling:** Pure CSS with animations
- **API:** Etherscan V2 API
- **Deployment:** GitHub Pages (automatic via GitHub Actions)

## Code Architecture
```
br1dge-age/
├── index.html              # Main HTML structure
├── script.js               # Core logic (API + visualization)
├── styles.css              # Styling + animations
├── .env                    # API keys (local only)
├── .gitignore              # Excludes .env, node_modules
├── package.json            # Vite config
├── vite.config.js          # Vite build config
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment
└── dist/                   # Production build output
```

## Coding Conventions
- **Files:** All lowercase with hyphens (index.html, script.js)
- **Modules:** ES6 modules with `type="module"` in HTML
- **Environment:** VITE_ prefix for environment variables

## Current Focus
- V2 API migration complete
- API key moved to GitHub Secret
- GitHub Actions handling builds

## Common Tasks
```bash
# Development
npm install              # Install dependencies
npm run dev              # Vite dev server
npm run build            # Production build to dist/
npm run preview          # Preview production build

# Deployment
# Push to main → GitHub Actions auto-deploys
```

## Key Files
- `script.js` - Fetches from Etherscan, renders word cloud
- `index.html` - Main page structure
- `.env` - Contains ETHERSCAN_API_KEY (never commit!)

## Environment Variables
```
VITE_ETHERSCAN_API_KEY=   # Set in GitHub Secrets as ETHERSCAN_API_KEY
```

## Deployment
1. Push to `main` branch
2. GitHub Actions builds (`npm run build`)
3. Deploys `dist/` to GitHub Pages
4. URL: https://birth.br1dge.xyz

## Important Notes
- API Key stored in GitHub Secret (ETHERSCAN_API_KEY)
- Static site - no server-side code
- Etherscan V2 API requires `module=account` parameter
- Word cloud renders age in years, months, days, hours, minutes, seconds

## Recent History (check with `git log --oneline -5`)
- 9477240: fix: add module=account to V2 API
- de195b0: fix: migrate to Etherscan V2 API
- 5fed42d: ci: add GitHub Pages deploy workflow
