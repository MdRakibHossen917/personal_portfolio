import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-[14px] border border-slate-200/70 bg-white shadow-2xs transition-shadow duration-300 ease-out hover:border-slate-300 hover:shadow-md">
      {/* Top — Project Image with 16:9 Aspect Ratio */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />

        {/* Small Project Category Badge Top-Right */}
        <span className="absolute top-3 right-3 z-10 rounded-md bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-white shadow-xs backdrop-blur-xs select-none">
          {project.categoryBadge}
        </span>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Project Title */}
          <h3 className="font-heading text-lg sm:text-[19px] font-bold text-slate-900 leading-snug mb-2">
            {project.title}
          </h3>

          {/* Project Description (limited to ~3 lines) */}
          <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-slate-600 line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-[#F1F2F4] px-2 py-0.5 font-mono text-[11px] font-medium text-slate-700 select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer: Action Buttons */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
          {/* Left Actions */}
          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl || '#'}
              target={project.liveUrl && project.liveUrl !== '#' ? '_blank' : undefined}
              rel={project.liveUrl && project.liveUrl !== '#' ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-primary-hover focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span>Live Preview</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200 focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                <Github className="h-3.5 w-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          {/* Right Action — Case Study Link */}
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            <span>Case Study</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
