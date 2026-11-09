# Intan Saravina, S.Kom. — Architectural 3D Portfolio & Bilingual Research Dossier (EN / 中文)

An ultra-refined, zero-neon architectural portfolio website engineered for **Intan Saravina, S.Kom.** (Computer Vision Engineer & Software Specialist, Bachelor of Computer Science — S1 Informatika, Universitas Samudra / UNSAM, GPA 3.60 Cum Laude).

---

## Architectural Highlights

1. **Zero-Neon Swiss Editorial Aesthetic:**
   - Off-black architectural canvas (`#0d0e11` / `#121316`), warm stark white typography (`#f5f5f7`), muted slate (`#8e8f96`), subtle hairline dividers (`#ffffff14`), and understated Brushed Champagne Silver (`#d1cdc7`) & Deep Mineral Bronze (`#a89f91`) accents.
2. **Native Client-Side Bilingual Switcher (`[ EN | 中文 ]`):**
   - Instant, zero-reload switching between English (`EN`) and Chinese (`中文`) across every navigation link, biography paragraph, HOG + SVM research specification, internship record, and technical capability row.
3. **Weighted Motion & Low-Contrast Metallic WebGL Topology:**
   - Powered by **Lenis** smooth inertial scroll, **GSAP + ScrollTrigger** mask reveals and image parallax, and a custom **Three.js** procedural metallic ribbon/geodesic topology with damped mouse inertia (`lerp = 0.05`).

---

## Repository File Structure (GitHub Pages Root)

```text
intan-saravina-portfolio/
├── index.html            # Semantic HTML5 markup, SEO meta tags, Open Graph & JSON-LD Person schema
├── styles.css            # Fluid clamp() typography, architectural hairline grids & custom properties
├── app.js                # Lenis scroll, GSAP choreography, Three.js engine & EN/中文 bilingual dictionary
├── icon.ico              # Multi-resolution browser tab favicon
├── logo.png              # Minimalist architectural wireframe monogram (header, footer & OG image)
├── intansaravina.png     # Executive studio portrait with parallax framing
├── imigrasilangsa.png    # Field residency documentation at Kantor Imigrasi Kelas II TPI Langsa (2024)
├── svmhog.png            # Machine vision vehicular bounding-box & trajectory telemetry output
├── robots.txt            # Crawler indexing directives
├── sitemap.xml           # Search engine XML sitemap
├── .nojekyll             # Bypasses Jekyll processing on GitHub Pages
└── README.md             # Deployment & asset replacement documentation
```

---

## Direct Deployment to GitHub Pages

1. Extract `intan-saravina-portfolio.zip` into your local repository directory.
2. Commit and push to your GitHub repository (`main` or `gh-pages` branch):

```bash
git init
git add .
git commit -m "Deploy Intan Saravina, S.Kom. Architectural Portfolio (EN/ZH)"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

3. In your GitHub repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and click **Save**.
