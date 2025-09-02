# 🚀 Koderi — Creative Web Studio Landing Page

Welcome to the official landing page for **Koderi** — a forward-thinking web studio crafting bespoke digital experiences with clarity, performance, and style.

---

## ✨ Why Koderi?

- 🎨 **Clarity in Design** — minimalistic and clean layouts, with polish down to every detail.
- ⚡ **Performance-First Approach** — optimized loading, effortless navigation, and SEO-ready structures.
- 🌍 **Multilingual by Nature** — built for Ukrainian and English audiences with effortless locale switching.
- 📂 **Dynamic Portfolio** — scalable project showcase that's easy to update and maintain.

---

## 📑 Project Highlights

This site includes:

- A robust **projects.json** data source to drive multilingual projects.
- Dynamic routes like `/en/[slug]` and `/uk/[slug]` — automatically pulling in content based on locale and slug.
- A polished hero experience on the homepage, with animated interactions powered by Framer Motion.
- A highly performant, reusable UI built with Tailwind CSS and Next.js App Router.
- Essential SEO tools — `robots.txt`, `sitemap.xml`, meta tags — all configured for streamlined deployment.

---

## 📂 Visual Overview

```bash
├── app/                    # Next.js App Router (locale and slug based routing)
│   ├── [locale]/           # Language-aware pages (en, uk)
│   └── [slug]/             # Project-specific dynamic pages
├── components/             # Reusable components: Header, Footer, Breadcrumbs, etc.
├── public/                 # Static files: images, robots.txt, sitemap.xml, favicon, etc.
├── projects.json           # Core project content with translations and sections
└── styles/                 # Global and theme-based styles
```

## 🛠️ Getting Started

Clone the repository:

```bash
git clone https://github.com/anton-kulchytskyi/koderi-landing-page.git
cd koderi-landing
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The site will be available at: http://localhost:3000

## 🚀 Ready for Production

Deploy to any Node.js–compatible platform.
For the smoothest experience, push your repo to GitHub and connect it to Vercel — no additional config required.

## 📌 Expand & Customize

- Add Case Studies / Blog for storytelling and SEO
- Integrate Contact Form with email/CRM
- Add Advanced SEO Tools (Open Graph images, structured data, analytics)

## 🛠️ Tech Stack

| Technology           | Role                                       |
| -------------------- | ------------------------------------------ |
| Next.js (App Router) | Framework powering structure and SSR/SSG   |
| React                | Component-based UI logic and state         |
| Tailwind CSS         | Atomic styling for clean, fast UI          |
| Framer Motion        | Sleek UI animations and scroll transitions |
| TypeScript           | Safe, maintainable JavaScript              |

## 👨‍💻 About Koderi

At Koderi, we believe that every pixel should serve a purpose.
We deliver websites and apps that blend simplicity, speed, and scalability — helping brands succeed in the digital landscape.

If you'd like to integrate, collaborate, or just say hi — we're ready.

## 📄 License

This project is licensed under the MIT License — built to be shared, forked, and improved.
