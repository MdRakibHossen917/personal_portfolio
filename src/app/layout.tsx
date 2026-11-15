import type { Metadata } from 'next';
import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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
  title: 'Md Rakib Hossen | Full Stack Developer',
  description:
    'Portfolio of Md Rakib Hossen, a Full Stack Developer specializing in MERN Stack, React, Next.js, Bubble.io, and Webflow.',
  openGraph: {
    title: 'Md Rakib Hossen | Full Stack Developer',
    description:
      'Portfolio of Md Rakib Hossen, a Full Stack Developer specializing in MERN Stack, React, Next.js, Bubble.io, and Webflow.',
    url: 'https://mdrakibhossen.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'Md Rakib Hossen Portfolio',
  },
  icons: {
    icon: '/favicon.svg',
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
