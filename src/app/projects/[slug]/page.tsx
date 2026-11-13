import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Md Rakib Hossen',
    };
  }

  return {
    title: `${project.title} | Md Rakib Hossen`,
    description: project.shortDescription || project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24">
      <Container>
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-text-primary mb-6 transition-colors"
        >
          &larr; Back to Projects
        </Link>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-text-secondary">{project.fullDescription || project.description}</p>
      </Container>
    </article>
  );
}
