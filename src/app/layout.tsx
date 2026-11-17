import type { Metadata } from 'next';
import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
  weight: ['400', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mdrakibhossen.com'),
  title: {
    default: 'Md Rakib Hossen | Full Stack Developer',
    template: '%s | Md Rakib Hossen',
  },
  description:
    'Explore the portfolio of Md Rakib Hossen, a Full Stack Developer specializing in Next.js, React, TypeScript, Bubble.io, and modern web applications.',
  keywords: [
    'Md Rakib Hossen',
    'Rakib Hossen Developer',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Bubble.io Developer',
    'Webflow Developer',
    'Web Developer Portfolio',
    'Frontend Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'JavaScript',
    'MongoDB',
    'MERN Stack',
    'Responsive Web Design',
  ],
  authors: [{ name: 'Md Rakib Hossen', url: 'https://mdrakibhossen.com' }],
  creator: 'Md Rakib Hossen',
  publisher: 'Md Rakib Hossen',
  alternates: {
    canonical: 'https://mdrakibhossen.com',
  },
  openGraph: {
    title: 'Md Rakib Hossen | Full Stack Developer',
    description:
      'Explore the portfolio of Md Rakib Hossen, a Full Stack Developer specializing in Next.js, React, TypeScript, Bubble.io, and modern web applications.',
    url: 'https://mdrakibhossen.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'Md Rakib Hossen Portfolio',
    images: [
      {
        url: '/images/profile/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Md Rakib Hossen - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Rakib Hossen | Full Stack Developer',
    description:
      'Explore the portfolio of Md Rakib Hossen, a Full Stack Developer specializing in Next.js, React, TypeScript, Bubble.io, and modern web applications.',
    images: ['/images/profile/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg' }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-text-primary min-h-screen flex flex-col">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
