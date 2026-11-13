import { Code2, Monitor, SlidersHorizontal, LayoutTemplate } from 'lucide-react';
import Container from '@/components/layout/Container';
import { services } from '@/data/services';

const iconMap = {
  code: Code2,
  monitor: Monitor,
  sliders: SlidersHorizontal,
  layout: LayoutTemplate,
};

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-slate-200/80 bg-[#F8FAFC] py-14 md:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Section Heading */}
          <div className="mb-10 md:mb-12">
            <p className="font-mono text-xs sm:text-sm font-medium tracking-wider text-primary uppercase mb-2">
              ENGINEERING SERVICES
            </p>
            <h2 className="font-heading text-3xl sm:text-[32px] font-bold tracking-tight text-slate-900 leading-tight mb-2.5">
              How I Can Help
            </h2>
            <p className="max-w-[560px] text-sm sm:text-[14px] leading-relaxed text-slate-600 font-sans">
              End-to-end engineering solutions tailored for startups, product teams, and digital
              businesses.
            </p>
          </div>

          {/* 4-Card Services Grid: 2 columns desktop, 1 column mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => {
              const Icon = iconMap[service.iconName];

              return (
                <article
                  key={service.id}
                  className="flex flex-col justify-between rounded-[14px] border border-slate-200/70 bg-white p-6 sm:p-7 shadow-2xs transition-shadow duration-300 ease-out hover:border-slate-300 hover:shadow-md"
                >
                  <div>
                    {/* Icon Container */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${service.iconBg} ${service.iconColor} mb-4`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Service Title */}
                    <h3 className="font-heading text-base sm:text-[17px] font-bold text-slate-900 leading-snug mb-2">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-slate-600 mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Highlight Label */}
                  <div className="border-t border-slate-100 pt-3.5 mt-auto">
                    <p className="font-mono text-[11px] sm:text-xs font-medium text-primary tracking-wide select-none">
                      {service.highlight}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
