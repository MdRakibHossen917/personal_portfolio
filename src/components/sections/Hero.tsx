import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Container from '@/components/layout/Container';

interface HighlightCard {
  value: string;
  label: string;
  supporting: string;
  valueColor?: string;
}

const highlightCards: HighlightCard[] = [
  {
    value: '3',
    label: 'COMPANIES WORKED WITH',
    supporting: 'Softvence Ltd., Hilnex IT Ltd., and Concord Group of Companies',
  },
  {
    value: 'Full Stack',
    label: 'DEVELOPMENT EXPERTISE',
    supporting: 'MERN Stack, Modern Frontend, Bubble.io & Webflow',
  },
  {
    value: '1+ Year',
    label: 'SOFTVENCE EXPERIENCE',
    supporting: 'Professional Web Developer at Softvence Ltd.',
    valueColor: 'text-emerald-400',
  },
];

const specialtyTags = ['Frontend Development', 'Bubble.io Development', 'Webflow Development'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#070D1E] text-white py-14 md:py-16 lg:py-20"
    >
      {/* Background Subtle Gradient, Glow & Dot Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {/* Right side large radial spotlight illumination matching preview */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 right-[2%] sm:right-[6%] lg:right-[8%] -translate-y-1/2 h-[550px] w-[550px] sm:h-[680px] sm:w-[680px] lg:h-[780px] lg:w-[780px] rounded-full bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.5)_0%,rgba(37,99,235,0.3)_35%,rgba(30,58,138,0.14)_55%,transparent_75%)] blur-2xl sm:blur-3xl"
        />

        {/* Subtle Ambient Top Glow */}
        <div className="absolute -top-32 left-1/4 h-[420px] w-[750px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.08),transparent_70%)]" />

        {/* Tech Dot Matrix Grid (Top Left) matching reference preview */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-[320px] w-[380px] lg:h-[380px] lg:w-[440px] bg-[radial-gradient(rgba(148,163,184,0.2)_1.5px,transparent_1.5px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_75%)]"
        />

        {/* Tech Dot Matrix Grid (Bottom Right) */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 h-[480px] w-[520px] lg:h-[580px] lg:w-[640px] bg-[radial-gradient(rgba(148,163,184,0.18)_1.5px,transparent_1.5px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_bottom_right,black_25%,transparent_75%)]"
        />
      </div>

      <Container>
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Main 2-Column Hero Layout */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column — 55% (~7 of 12 columns) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400 mb-5 select-none shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Available for new opportunities</span>
              </div>

              {/* Introduction */}
              <p className="text-slate-400 text-sm sm:text-base font-medium mb-1 tracking-wide">
                Hello, I&apos;m
              </p>

              {/* Main Name */}
              <h1 className="font-heading text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px] font-extrabold tracking-tight text-white leading-[1.08] mb-3">
                Md Rakib <span className="text-indigo-400">Hossen</span>
              </h1>

              {/* Professional Role Hierarchy */}
              <div className="mb-4">
                <p className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-100 tracking-tight">
                  Full Stack Developer
                </p>
              </div>

              {/* Specialty Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {specialtyTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300 select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Professional Description */}
              <p className="max-w-[520px] text-[14px] sm:text-[15px] leading-relaxed text-slate-300/90 mb-8 font-sans">
                I build modern, scalable, and user-focused web applications. From responsive
                frontend interfaces to full-stack MERN applications and no-code solutions, I turn
                ideas into functional digital experiences.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 w-full sm:w-auto">
                <Link
                  href="/#projects"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-white shadow-xs transition-colors duration-200 hover:bg-primary-hover focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#070D1E]"
                >
                  <span>Explore My Projects</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/80 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-white shadow-xs transition-colors duration-200 hover:bg-slate-700/80 hover:border-slate-600 focus:outline-hidden focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-[#070D1E]"
                >
                  <span>Contact Me</span>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-medium text-slate-400 mr-1 hidden sm:inline">
                  Connect:
                </span>
                <a
                  href="https://github.com/rakibhossen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 text-slate-400 transition-colors duration-200 hover:border-indigo-500/60 hover:bg-slate-800 hover:text-white shadow-2xs"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com/in/rakibhossen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 text-slate-400 transition-colors duration-200 hover:border-indigo-500/60 hover:bg-slate-800 hover:text-white shadow-2xs"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href="mailto:contact@rakibhossen.dev"
                  aria-label="Send Email"
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 text-slate-400 transition-colors duration-200 hover:border-indigo-500/60 hover:bg-slate-800 hover:text-white shadow-2xs"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column — 45% (~5 of 12 columns) Profile Image Area */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative isolate w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] mx-auto lg:mr-0">
                {/* Stunning Dark-Blue Glowing Spotlight Effect (Radial Gradient Aura) */}
                {/* 1. Diffused wide radial aura extending behind and around container */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-16 sm:-inset-24 md:-inset-32 z-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.42)_0%,rgba(29,78,216,0.28)_40%,rgba(30,58,138,0.12)_60%,transparent_75%)] blur-2xl sm:blur-3xl select-none"
                />

                {/* 2. Concentrated vibrant blue core glow directly behind profile card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-8 sm:-inset-12 z-0 rounded-full bg-blue-600/30 blur-xl sm:blur-2xl select-none"
                />

                {/* Profile Image Portrait Card with Luminous Border */}
                <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[22px] sm:rounded-[24px] border border-blue-400/35 bg-[#0B1528] shadow-[0_0_45px_rgba(37,99,235,0.35)] ring-1 ring-white/10">
                  <Image
                    src="/images/profile/profile.jpg"
                    alt="Md Rakib Hossen - Full Stack Developer"
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section — Professional Highlight Cards */}
          <div className="relative z-10 mt-12 pt-8 border-t border-slate-800/80 md:mt-14 lg:mt-16">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:gap-5">
              {highlightCards.map((card) => (
                <div
                  key={card.label}
                  className="group flex flex-col justify-between rounded-[14px] border border-[#1E293B] bg-[#0D172A]/90 backdrop-blur-xs p-5 sm:p-6 transition-shadow duration-300 ease-out hover:border-slate-700 hover:shadow-md hover:shadow-indigo-500/5 shadow-2xs"
                >
                  <div>
                    <span
                      className={`block font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 ${
                        card.valueColor || 'text-white'
                      }`}
                    >
                      {card.value}
                    </span>
                    <span className="block font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-2">
                      {card.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400/90 leading-relaxed">{card.supporting}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
