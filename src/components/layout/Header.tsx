'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';
import Container from './Container';
import { navItems } from '@/data/navigation';

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isManualScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Skip scroll-spy update during programmatic smooth scrolling from a nav click
      if (isManualScrollRef.current) {
        return;
      }

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. If near the top, always hero
      if (scrollY < 80) {
        setActiveSection('hero');
        return;
      }

      // 2. If scrolled near the bottom of the page, always activate contact (last section)
      if (windowHeight + scrollY >= documentHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // 3. Check section visibility relative to sticky header threshold (~140px)
      const sectionIds = [
        'hero',
        'about',
        'experience',
        'skills',
        'projects',
        'services',
        'contact',
      ];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('/#', '');
    setActiveSection(id);

    if (window.location.pathname === '/' || window.location.pathname === '') {
      e.preventDefault();

      // Temporarily disable scroll-spy while smooth scrolling to target
      isManualScrollRef.current = true;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 76;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: id === 'hero' ? 0 : offsetPosition,
          behavior: 'smooth',
        });

        window.history.pushState(null, '', href);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
      }, 900);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#F8FAFC]/95 backdrop-blur-md border-border shadow-xs'
          : 'bg-[#F8FAFC] border-border/80'
      }`}
    >
      <Container>
        <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between">
          {/* Left — Brand Logo */}
          <Link
            href="/#hero"
            aria-label="Md Rakib Hossen - Home"
            className="group flex items-center transition-opacity hover:opacity-95"
            onClick={(e) => handleNavClick(e, '/#hero')}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-700 text-white shadow-xs">
              <span className="font-heading text-sm font-extrabold tracking-tight">MR</span>
            </div>
          </Link>

          {/* Center — Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('/#', '');
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-[14px] font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary font-semibold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right — Actions */}
          <div className="hidden sm:flex items-center">
            <a
              href="/cv.pdf"
              download="Md_Rakib_Hossen_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 shadow-2xs"
            >
              <Download className="h-4 w-4 text-slate-500" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-primary"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Tablet Hamburger (768px-1023px) */}
          <div className="hidden sm:flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-hidden focus:ring-2 focus:ring-primary"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Animated Blue Light Stream along Navbar Bottom Border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-[2px] overflow-hidden"
      >
        <div className="animate-water-drop flex h-full items-center">
          <div className="h-[2px] w-10 sm:w-14 bg-gradient-to-r from-transparent via-blue-500 to-sky-300 shadow-[0_0_8px_rgba(59,130,246,0.8),0_0_3px_#38bdf8]" />
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 top-[76px] z-40 lg:hidden bg-slate-900/40 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="border-b border-border bg-[#F8FAFC] px-5 py-6 shadow-lg max-h-[calc(100vh-76px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
              {navItems.map((item) => {
                const sectionId = item.href.replace('/#', '');
                const isActive = activeSection === sectionId;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-primary" />}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-slate-200">
              <a
                href="/cv.pdf"
                download="Md_Rakib_Hossen_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <Download className="h-4 w-4 text-slate-500" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
