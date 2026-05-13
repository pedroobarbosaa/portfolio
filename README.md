# Pedro Barbosa — Personal Portfolio

> **From raw data to decisions — fast.**  
> A personal portfolio built with modern web technologies, Apple-inspired design, and real production components.

---

## Overview

This is my personal portfolio website — built entirely from scratch as a project in itself.  
It showcases my professional experience, personal projects, certifications, and technical stack as a Data Analyst based in Brasília, Brazil.

The design follows an Apple-inspired minimalist aesthetic with alternating Aurora Background sections, smooth Motion animations, and components sourced from [21st.dev](https://21st.dev).

**Live:** `coming soon` — deploying to Vercel with custom domain

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Nova preset · Geist font) |
| Animations | Motion (motion/react) |
| UI Components | 21st.dev community registry |
| Design System | Apple DESIGN.md via getdesign.md |
| Design Intelligence | UI/UX Pro Max Skill (Claude Code) |
| Hosting | Vercel |

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, tagline, Aurora Background, availability line |
| **About** | Personal story (law → data), tech icons grid, key metrics |
| **Work** | Professional experience (Clemon Campos), projects, freelance |
| **Testimonials** | Real testimonials from colleagues — scrolling columns with WhatsApp proof |
| **Tech Stack** | 4 categories: BI & Analytics · Languages · Cloud · Automation |
| **Certifications** | 6 verified certificates from Descomplica with drag-scroll slider |
| **Currently Learning** | Data Engineering, DP-900, Advanced Power BI |
| **Contact** | Email, LinkedIn, GitHub, WhatsApp + CV download |

---

## Custom Components

All components built or adapted for this project:

```
components/ui/
├── aurora-background.tsx       # Animated gradient background (Hero + section accents)
├── glass-blog-card-shadcnui.tsx  # Project card with image preview (Tio André site)
├── cards-slider-shadcnui.tsx   # Horizontal drag-scroll slider (Certifications)
└── testimonials-columns-1.tsx  # Auto-scrolling columns (Testimonials)
```

---

## Design Decisions

**Aurora Background** — used at low opacity (`opacity-15`) for interior sections to create a subtle alternating rhythm between warm white and neutral gray backgrounds, following Apple's section-break pattern.

**Copy** — written to speak directly to international technical recruiters. The "law school → data analyst" narrative is the differentiator — no other analyst candidate will have that story.

**Testimonials** — real WhatsApp messages from the team at Clemon Campos Advocacia, translated to English with the original Portuguese preserved in italic below each quote. A "View on WhatsApp" button opens the actual screenshot as proof.

**Certifications** — PDF certificates converted to PNG and embedded as real images in a draggable slider, with verified credential links from Descomplica's official registry.

---

## Key Metrics (from professional experience)

```
40h    eliminated per month     (manual work replaced by Python automation)
115+   reports automated / mo   (individualized case reports, near-zero delivery time)
~90%   risk reduction           (missed-deadline risk across 3,000+ case portfolio)
<1h    avg client response      (was ~2 days before Power BI dashboards)
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/pedroobarbosaa/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
├── components/
│   └── ui/                 # Custom + shadcn components
├── public/
│   └── images/
│       ├── certificates/   # Certificate PNGs (converted from PDF)
│       └── testimonials-whatsapp.png
├── _context/               # Portfolio briefing files (gitignored)
├── CLAUDE.md               # Claude Code context
├── DESIGN.md               # Apple design system reference
└── AGENTS.md               # Next.js agent rules
```

---

## Author

**Pedro Barbosa Freire**  
Data Analyst · Brasília, Brazil · Open to remote

[LinkedIn](https://linkedin.com/in/pedrobarbosafreire) · [GitHub](https://github.com/pedroobarbosaa) · [Email](mailto:barbosaapedroo@gmail.com)

---

*Built with Claude Code + UI/UX Pro Max Skill + 21st.dev components.*

##Need to change something?
##git add .
##git commit -m "descrição da mudança"
##git push