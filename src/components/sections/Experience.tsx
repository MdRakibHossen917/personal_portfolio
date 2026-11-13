import Container from '@/components/layout/Container';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="bg-[#F3F4F6] py-14 md:py-16 lg:py-20">
      <Container>
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Section Heading */}
          <div className="mb-10 md:mb-12">
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase mb-2">
              CAREER TIMELINE
            </p>
            <h2 className="font-heading text-3xl sm:text-[34px] md:text-[36px] font-bold tracking-tight text-slate-900 leading-tight mb-3">
              Where I&apos;ve Worked
            </h2>
            <p className="max-w-[560px] text-sm sm:text-[15px] leading-relaxed text-slate-600 font-sans">
              My professional journey through software development, client deliveries, and
              real-world production environments.
            </p>
          </div>

          {/* Experience Cards Stack */}
          <div className="flex flex-col gap-4">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="rounded-2xl border border-slate-200/70 bg-white p-6 sm:p-8 shadow-2xs transition-shadow duration-300 ease-out hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8">
                  {/* Left Column — ~32% on desktop */}
                  <div className="w-full md:w-[32%] shrink-0 flex flex-col items-start">
                    {/* Employment Badge */}
                    <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 font-sans text-xs font-semibold text-primary mb-2.5">
                      {exp.badge}
                    </span>

                    {/* Company Name */}
                    <h3 className="font-heading text-[17px] sm:text-[18px] font-bold text-slate-900 leading-snug">
                      {exp.company}
                    </h3>

                    {/* Job Title */}
                    <p className="text-[13px] sm:text-[14px] font-medium text-primary mt-0.5">
                      {exp.position}
                    </p>
                  </div>

                  {/* Right Column — ~68% on desktop */}
                  <div className="w-full md:w-[68%] flex flex-col justify-start">
                    {/* Description */}
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-600 font-sans mb-4">
                      {exp.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[11px] sm:text-xs text-slate-700 select-none"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
