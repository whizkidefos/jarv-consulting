import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JARV Consulting - Adult Social Care & Supported Living',
  description: 'CQC-registered Adult Social Care and Supported Living company providing comfortable accommodation and support services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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