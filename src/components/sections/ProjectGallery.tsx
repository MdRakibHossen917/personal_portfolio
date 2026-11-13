'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Project, ProjectCategory } from '@/types';
import ProjectCard from './ProjectCard';

type FilterType = 'all' | ProjectCategory;

interface FilterOption {
  id: FilterType;
  label: string;
}

const filterOptions: FilterOption[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'mern', label: 'MERN Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'bubble', label: 'Bubble.io' },
  { id: 'webflow', label: 'Webflow' },
];

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<FilterType>('all');
  const [showAll, setShowAll] = useState(false);

  // 1. Filter projects based on active category
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // 2. Control initial display: show featured or first 4 projects, unless showAll is true
  const initialLimit = 4;
  const hasMoreProjects = filteredProjects.length > initialLimit;
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, initialLimit);

  const handleFilterClick = (filterId: FilterType) => {
    setActiveCategory(filterId);
    // Keep showAll state intact as requested so user preference is maintained
  };

  return (
    <div>
      {/* Header Layout: Left Title & Description, Right Filters */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-12">
        <div className="max-w-[480px]">
          <p className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase mb-2">
            PORTFOLIO
          </p>
          <h2 className="font-heading text-3xl sm:text-[32px] font-bold tracking-tight text-slate-900 leading-tight mb-2.5">
            Selected Work &amp; Projects
          </h2>
          <p className="text-xs sm:text-[13px] sm:text-sm leading-relaxed text-slate-600 font-sans">
            A collection of projects across full-stack development, frontend engineering, Bubble.io,
            and Webflow.
          </p>
        </div>

        {/* Category Filters in Exact Order */}
        <div
          role="tablist"
          aria-label="Project category filters"
          className="flex flex-wrap items-center gap-1.5 sm:gap-2"
        >
          {filterOptions.map((filter) => {
            const isActive = activeCategory === filter.id;

            return (
              <button
                key={filter.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => handleFilterClick(filter.id)}
                className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-[13px] font-medium transition-colors cursor-pointer select-none ${
                  isActive
                    ? 'bg-primary text-white shadow-2xs'
                    : 'border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Two-Column Project Grid */}
      {displayedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <p className="font-heading text-base font-medium text-slate-700">
            No projects found in this category yet.
          </p>
          <p className="text-xs text-slate-500 mt-1">New projects will be added soon.</p>
        </div>
      )}

      {/* View All Projects Button (Hidden if dataset has no additional projects in category) */}
      {hasMoreProjects && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200/90 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-2xs transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer select-none"
          >
            <span>{showAll ? 'Show Featured Projects' : 'View All Projects & Archives'}</span>
            {showAll ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
