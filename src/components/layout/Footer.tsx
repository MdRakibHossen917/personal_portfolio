import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import Container from './Container';
import { contactData } from '@/data/contact';

const navCol1 = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
];

const navCol2 = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[#3A3F42] bg-[#2D3133] py-10 md:py-12 text-white">
      <Container>
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Main Footer Content Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 items-start">
            {/* Left Column: Brand, Description & Social Links (~5 of 12 cols) */}
            <div className="md:col-span-5 flex flex-col items-start">
              {/* Brand Logo & Name */}
              <Link
                href="/#hero"
                className="group flex items-center gap-3 transition-opacity hover:opacity-95"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-700 text-white shadow-xs">
                  <span className="font-heading text-xs font-extrabold tracking-tight">MR</span>
                </div>
                <span className="font-heading text-base font-bold leading-tight tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  Md Rakib Hossen
                </span>
              </Link>

              {/* Compact Description */}
              <p className="mt-3.5 mb-4 max-w-[280px] text-xs sm:text-[13px] leading-relaxed text-slate-300 font-sans">
                High-performance full-stack web architectures, specialized MERN microservices, and
                agency-grade visual development tailored for scaling growth.
              </p>

              {/* Social Icon Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={contactData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3A3F42] text-white transition-colors hover:bg-[#484F53] shadow-2xs"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href={contactData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3A3F42] text-white transition-colors hover:bg-[#484F53] shadow-2xs"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${contactData.email}`}
                  aria-label="Send Email"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3A3F42] text-white transition-colors hover:bg-[#484F53] shadow-2xs"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Middle Column: Navigation Index (~4 of 12 cols) */}
            <div className="md:col-span-4 flex flex-col items-start">
              <p className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-indigo-300 uppercase mb-3 select-none">
                NAVIGATION INDEX
              </p>

              <div className="flex items-start gap-8 sm:gap-10">
                {/* Column 1 */}
                <div className="flex flex-col gap-2">
                  {navCol1.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xs sm:text-[13px] font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-2">
                  {navCol2.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xs sm:text-[13px] font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Availability & Back to Top (~3 of 12 cols) */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end">
              <div className="flex flex-col items-start md:items-end">
                <p className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-indigo-300 uppercase mb-3 select-none">
                  AVAILABILITY
                </p>

                {/* Status Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[#3A3F42] bg-[#1F2224] px-3 py-1.5 select-none shadow-2xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-200">Available for Hire</span>
                </div>

                {/* Back to Top Button */}
                <Link
                  href="/#hero"
                  aria-label="Back to top of page"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#3A3F42] px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#484F53] shadow-2xs select-none"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer Row: Copyright & Technical Tagline */}
          <div className="mt-8 pt-6 border-t border-[#3A3F42] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-slate-400 font-sans">
              &copy; {currentYear} Md Rakib Hossen. All rights reserved.
            </p>
            <p className="font-mono text-[10px] font-medium tracking-wider text-slate-400 uppercase select-none">
              BUILT WITH PRECISION &amp; MODERN STANDARDS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
