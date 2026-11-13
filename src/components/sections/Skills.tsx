import { Code2, Server, Database, SlidersHorizontal, Terminal, BadgeCheck } from 'lucide-react';
import Container from '@/components/layout/Container';
import { skillCategories } from '@/data/skills';

const iconMap = {
  code: Code2,
  server: Server,
  database: Database,
  sliders: SlidersHorizontal,
  terminal: Terminal,
  'badge-check': BadgeCheck,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-200/80 bg-[#F8FAFC] py-14 md:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Section Heading */}
          <div className="mb-10 md:mb-12">
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase mb-2">
              TECHNICAL PROFICIENCY
            </p>
            <h2 className="font-heading text-3xl sm:text-[34px] md:text-[36px] font-bold tracking-tight text-slate-900 leading-tight mb-3">
              Technologies I Work With
            </h2>
            <p className="max-w-[560px] text-sm sm:text-[15px] leading-relaxed text-slate-600 font-sans">
              Categorized toolset for building scalable, responsive modern web products. Clean tech
              stacks without artificial metrics.
            </p>
          </div>

          {/* 6-Category Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => {
              const Icon = iconMap[category.iconName];

              return (
                <div
                  key={category.id}
                  className="flex flex-col justify-between h-full rounded-[14px] border border-slate-200/70 bg-white p-5 sm:p-6 shadow-2xs transition-shadow duration-300 ease-out hover:border-slate-300 hover:shadow-md"
                >
                  <div>
                    {/* Card Header: Icon on Left, Text Block on Right */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${category.iconBg} ${category.iconColor}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-heading text-[15px] sm:text-base font-bold text-slate-900 leading-snug">
                          {category.title}
                        </h3>
                        <p className="font-mono text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Technology Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-md bg-[#F1F2F4] px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
