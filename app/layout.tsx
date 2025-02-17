import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JARV Consulting - Adult Social Care & Supported Living',
  description: 'CQC-registered Adult Social Care and Supported Living company providing comfortable accommodation and support services.',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  authors: [
    {
      name: 'JARV Consulting',
      url: 'https://jarvconsulting.co.uk',
    },
  ],
  keywords: [
    'Supported Living',
    'Adult Social Care',
    'CQC Registered',
    'Care Services',
    'Bolton',
    'Greater Manchester',
  ],
  creator: 'JARV Consulting',
  publisher: 'JARV Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
          sizes="any"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}