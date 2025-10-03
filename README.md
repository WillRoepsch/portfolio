
# Will Roepsch — Portfolio (Static)

A complete portfolio site aligned to the ISU checklist: welcome page, career objective, Senior Design + 3 projects, experience, reflections (general + cumulative), ethics paper, and résumé.

## Run locally
- Open the folder in VS Code.
- Install the **Live Server** extension.
- Right‑click `index.html` → **Open with Live Server** (or double‑click to open in a browser).

## Deploy to GitHub Pages
1. Create a new repo on GitHub (e.g., `portfolio`).
2. Initialize and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. On GitHub → **Settings** → **Pages** → **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
4. Your site will be live at `https://<your-username>.github.io/portfolio/` in a minute or two.

### Optional: username site
Create a repo named `<your-username>.github.io` and push this folder there. GitHub Pages will host it at `https://<your-username>.github.io`.

## Customize
- Replace contact info in `index.html` and `contact.html`.
- Update links (“Repo”, “Demo”) throughout `projects.html`.
- Place PDFs (résumé, ethics paper) in `assets/` and keep filenames consistent.
- Tweak colors in `styles.css` (CSS variables at top).

## License
You are free to use and modify this template for academic portfolio submissions.
