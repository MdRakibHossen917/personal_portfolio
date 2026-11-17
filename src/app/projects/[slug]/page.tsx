import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Container from '@/components/layout/Container';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = project.title;
  const description = project.shortDescription || project.description;
  const canonicalUrl = `https://mdrakibhossen.com/projects/${project.slug}`;
  const ogImageUrl = project.image.startsWith('http')
    ? project.image
    : `https://mdrakibhossen.com${project.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Md Rakib Hossen`,
      description,
      url: canonicalUrl,
      type: 'article',
      siteName: 'Md Rakib Hossen Portfolio',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Md Rakib Hossen`,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mdrakibhossen.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://mdrakibhossen.com/#projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://mdrakibhossen.com/projects/${project.slug}`,
      },
    ],
  };

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `https://mdrakibhossen.com/projects/${project.slug}`,
    image: project.image.startsWith('http')
      ? project.image
      : `https://mdrakibhossen.com${project.image}`,
    creator: {
      '@type': 'Person',
      name: 'Md Rakib Hossen',
      url: 'https://mdrakibhossen.com',
    },
    keywords: project.technologies.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <article className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F8FAFC]">
        <Container>
          <div className="mx-auto w-full max-w-[1000px]">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumbs"
              className="mb-6 flex items-center gap-2 text-xs text-slate-500"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <span>/</span>
              <span className="text-slate-800 font-medium truncate max-w-[240px] sm:max-w-none">
                {project.title}
              </span>
            </nav>

            {/* Back Link */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover mb-8 transition-colors select-none"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Selected Work</span>
            </Link>

            {/* Header info */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-md bg-slate-900 px-3 py-1 text-xs font-semibold text-white select-none">
                  {project.categoryBadge}
                </span>
                {project.featured && (
                  <span className="rounded-md bg-indigo-50 border border-indigo-200 px-2.5 py-1 text-xs font-semibold text-indigo-700 select-none">
                    Featured Project
                  </span>
                )}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-sans max-w-[800px]">
                {project.fullDescription || project.description}
              </p>
            </header>

            {/* Project Image */}
            <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm mb-10">
              <Image
                src={project.image}
                alt={`${project.title} - ${project.categoryBadge} Showcase`}
                fill
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-cover"
                priority
              />
            </figure>

            {/* Project Meta & Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-2xs mb-10">
              <div className="md:col-span-2">
                <h2 className="font-heading text-lg font-bold text-slate-900 mb-3">
                  About this Project
                </h2>
                <p className="text-sm leading-relaxed text-slate-600 mb-6 font-sans">
                  {project.description}
                </p>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">
                      Key Highlights &amp; Architecture
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[#F1F2F4] px-2.5 py-1 font-mono text-xs font-medium text-slate-700 select-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-2xs transition-colors hover:bg-primary-hover focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
