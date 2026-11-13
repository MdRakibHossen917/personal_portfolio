import Image from 'next/image';
import { Layers, Monitor, Zap, Gauge } from 'lucide-react';
import Container from '@/components/layout/Container';

interface FocusCard {
  title: string;
  description: string;
  icon: typeof Layers;
}

const focusCards: FocusCard[] = [
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end MERN microservices, robust REST APIs, and database modeling.',
    icon: Layers,
  },
  {
    title: 'Responsive Frontend Engineering',
    description: 'Pixel-perfect component architectures in React and Tailwind CSS.',
    icon: Monitor,
  },
  {
    title: 'No-Code Rapid Development',
    description: 'High-velocity MVPs and CMS ecosystems via Bubble.io and Webflow.',
    icon: Zap,
  },
  {
    title: 'Performance & User Experience',
    description: 'Optimized load times, accessibility, and friction-free user journeys.',
    icon: Gauge,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200/80 bg-[#F8FAFC] py-14 md:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Section Heading at Top Left */}
          <div className="mb-10 md:mb-12">
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase mb-2">
              ABOUT ME
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Building Digital Experiences That Matter.
            </h2>
          </div>

          {/* Two-Column Main Content */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column — Image & Floating Code Snippet Card (~5 of 12) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none pb-10 sm:pb-12 pr-1 sm:pr-4">
                {/* Workspace Photograph */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-sm">
                  <Image
                    src="/images/about/workspace.jpg"
                    alt="Developer workspace with dual monitors, code editor, and clean desk setup"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* Floating Code Snippet Card Overlapping Bottom-Right */}
                <div className="absolute bottom-0 right-0 z-10 w-[250px] sm:w-[280px] rounded-xl border border-slate-800 bg-[#0F172A] p-4 sm:p-4.5 shadow-xl select-none">
                  {/* Window Indicator Dots */}
                  <div className="mb-2.5 flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-500/90" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/90" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/90" />
                    </div>
                    <span className="font-mono text-[10px] font-medium text-slate-400">
                      developer.js
                    </span>
                  </div>

                  {/* Monospace Code with Syntax Highlighting */}
                  <div className="font-mono text-[11px] sm:text-xs leading-relaxed">
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-sky-300">developer</span>{' '}
                      <span className="text-slate-400">=</span>{' '}
                      <span className="text-amber-300">&#123;</span>
                    </div>
                    <div className="pl-3.5">
                      <span className="text-slate-300">name:</span>{' '}
                      <span className="text-emerald-300">&quot;Md Rakib Hossen&quot;</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-3.5">
                      <span className="text-slate-300">role:</span>{' '}
                      <span className="text-emerald-300">&quot;Full-Stack MERN&quot;</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div className="pl-3.5">
                      <span className="text-slate-300">focus:</span>{' '}
                      <span className="text-emerald-300">&quot;Scalability &amp; UX&quot;</span>
                    </div>
                    <div>
                      <span className="text-amber-300">&#125;</span>
                      <span className="text-slate-400">;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Professional Introduction & Focus Cards (~7 of 12) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* First Paragraph */}
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 mb-3 font-sans">
                I am a dedicated software developer specializing in the{' '}
                <strong className="font-semibold text-slate-900">
                  MERN Stack (MongoDB, Express.js, React.js, Node.js)
                </strong>
                , crafting responsive, high-performance web products that deliver real business
                impact.
              </p>

              {/* Second Paragraph */}
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 mb-6 lg:mb-8 font-sans">
                Alongside full-stack engineering, I bridge the gap between custom code and agile
                delivery using visual development frameworks like{' '}
                <strong className="font-semibold text-slate-900">Bubble.io</strong> and{' '}
                <strong className="font-semibold text-slate-900">Webflow</strong>. My methodology
                prioritizes clean code modularity, strict architectural integrity, and intuitive
                user experiences.
              </p>

              {/* What I Focus On Section */}
              <div>
                <p className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
                  WHAT I FOCUS ON
                </p>

                {/* 2x2 Feature Card Grid */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                  {focusCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.title}
                        className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 sm:p-4.5 shadow-2xs transition-shadow duration-300 ease-out hover:border-slate-300 hover:shadow-md"
                      >
                        <div>
                          {/* Soft Light-Gray Icon Container */}
                          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-primary">
                            <Icon className="h-4.5 w-4.5 text-primary" />
                          </div>

                          {/* Title */}
                          <h3 className="font-heading text-[14px] sm:text-[15px] font-bold text-slate-900 mb-1 leading-snug">
                            {card.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-500 leading-relaxed">{card.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
