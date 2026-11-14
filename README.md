# Md Rakib Hossen — Full Stack Developer Portfolio

[![CI/CD Pipeline](https://github.com/MdRakibHossen917/personal_portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/MdRakibHossen917/personal_portfolio/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

A modern, high-performance personal portfolio website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed with sleek developer-focused aesthetics, interactive animations, and responsive layouts.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router & Server/Client Components)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Linting & Formatting:** ESLint & Prettier
- **CI/CD:** GitHub Actions Automated Pipeline

---

## 📁 Project Architecture

```
├── public/                 # Static assets (images, icons, resume)
│   ├── images/
│   │   ├── about/
│   │   ├── profile/
│   │   └── projects/
│   └── cv.pdf
├── src/
│   ├── app/                # Next.js App Router (pages & layouts)
│   ├── components/
│   │   ├── layout/         # Header, Footer, Container
│   │   └── sections/       # Hero, About, Experience, Skills, Projects, Services, Contact
│   ├── data/               # Portfolio content data models
│   └── types/              # TypeScript interfaces and types
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflows
├── tailwind.config.ts      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

---

## ⚙️ Local Development

### 1. Prerequisites
- Node.js 20.x or higher
- npm or pnpm or yarn

### 2. Installation
```bash
git clone https://github.com/MdRakibHossen917/personal_portfolio.git
cd personal_portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Scripts & Quality Checks

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server with hot-reload |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Starts production server locally |
| `npm run lint` | Runs ESLint validation across codebase |
| `npm run type-check` | Performs TypeScript compiler type verification (`tsc --noEmit`) |
| `npm run format` | Auto-formats code with Prettier |
| `npm run format:check` | Checks code formatting against Prettier style rules |

---

## 🔄 CI/CD Pipeline

The project includes an automated GitHub Actions pipeline (`.github/workflows/ci.yml`) that executes on every push and pull request to `main`:
1. **Code Formatting Check:** Ensures all code adheres to Prettier formatting.
2. **ESLint Validation:** Catches syntax, security, and React anti-patterns.
3. **Type Safety:** Verifies complete TypeScript compilation without any type mismatches.
4. **Production Build:** Validates that the full Next.js production build succeeds with zero errors.

---

## 👨‍💻 Author

**Md Rakib Hossen**
- Role: Full Stack Developer & MERN Stack Developer
- Email: [contact@rakibhossen.dev](mailto:contact@rakibhossen.dev)
- GitHub: [@MdRakibHossen917](https://github.com/MdRakibHossen917)
