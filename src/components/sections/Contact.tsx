import { Mail, Linkedin, Github, Download } from 'lucide-react';
import Container from '@/components/layout/Container';
import { contactData } from '@/data/contact';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800/80 bg-[#0B1220] py-14 md:py-16 lg:py-20 text-white"
    >
      <Container>
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Two-Column Layout: Left Info ~40%, Right Form ~60% */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column — Introduction, Availability, Contact Details, Download CV */}
            <div className="lg:col-span-5 flex flex-col items-start">
              {/* Eyebrow Label */}
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-2">
                {contactData.eyebrow}
              </p>

              {/* Main Heading (Two Lines) */}
              <h2 className="font-heading text-3xl sm:text-[34px] md:text-[36px] font-bold tracking-tight text-white leading-tight mb-3">
                Have a Project <br />
                in Mind?
              </h2>

              {/* Description */}
              <p className="max-w-[380px] text-sm sm:text-[15px] leading-relaxed text-slate-300 font-sans mb-6">
                {contactData.description}
              </p>

              {/* Compact Availability Indicator */}
              <div className="mb-6 flex items-center gap-2.5 rounded-lg border border-slate-800 bg-[#070D18] px-3.5 py-2 select-none shadow-2xs">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-slate-300">
                  {contactData.availability}
                </span>
              </div>

              {/* Stacked Contact Information Cards */}
              <div className="flex w-full flex-col gap-2.5 mb-6">
                {/* Email Item */}
                <a
                  href={`mailto:${contactData.email}`}
                  className="group flex items-center gap-3.5 rounded-xl border border-slate-800/80 bg-[#10192B] p-3 transition-colors hover:border-slate-700 shadow-2xs"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1E293B] text-slate-300 transition-colors group-hover:text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      EMAIL
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-200 transition-colors group-hover:text-white">
                      {contactData.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a
                  href={contactData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-xl border border-slate-800/80 bg-[#10192B] p-3 transition-colors hover:border-slate-700 shadow-2xs"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1E293B] text-slate-300 transition-colors group-hover:text-primary">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      LINKEDIN
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-200 transition-colors group-hover:text-white">
                      {contactData.linkedin}
                    </span>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={contactData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-xl border border-slate-800/80 bg-[#10192B] p-3 transition-colors hover:border-slate-700 shadow-2xs"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1E293B] text-slate-300 transition-colors group-hover:text-primary">
                    <Github className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      GITHUB REPOSITORIES
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-200 transition-colors group-hover:text-white">
                      {contactData.github}
                    </span>
                  </div>
                </a>
              </div>

              {/* Download CV Action Button */}
              <a
                href="/cv.pdf"
                download="Md_Rakib_Hossen_CV.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-[#1E293B] px-4 py-2.5 text-xs sm:text-sm font-medium text-white shadow-2xs transition-colors hover:bg-slate-700/80 focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0B1220]"
              >
                <Download className="h-4 w-4 text-slate-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Right Column — Contact Form Panel */}
            <div className="lg:col-span-7 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
