import '@/ui/acme-logo';
import { Inter } from 'next/font/google';
import Providers from '@/ui/layout/providers';
import '../ui/global.css';
import { auth } from '@/auth';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers session={session}>
          {/*<Toaster />*/}
          {children}
        </Providers>
      </body>
    </html>
  );
}
