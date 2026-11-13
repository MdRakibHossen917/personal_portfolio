import Container from '@/components/layout/Container';
import { projects } from '@/data/projects';
import ProjectGallery from './ProjectGallery';

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200/80 bg-[#F3F4F6] py-14 md:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto w-full max-w-[1400px]">
          <ProjectGallery projects={projects} />
        </div>
      </Container>
    </section>
  );
}
