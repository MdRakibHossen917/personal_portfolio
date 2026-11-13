import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <Container className="text-center">
        <p className="font-mono text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-text-secondary">
          Sorry, the page you are looking for could not be found.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
