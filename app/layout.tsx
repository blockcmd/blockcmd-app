import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { Toaster } from "@/components/ui/toaster";
import MobileWarning from '@/components/mobile-warning';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BlockCMD - Command your blocks',
  description: 'Explore blockchains with an intuitive product suite',
  metadataBase: new URL('https://www.blockcmd.com'),
  openGraph: {
    title: 'BlockCMD - Command your blocks',
    description: 'Explore blockchains with an intuitive product suite',
    url: 'https://www.blockcmd.com',
    siteName: 'BlockCMD',
    images: [
      {
        url: '/blockcmd-tbn.png',
        width: 1200,
        height: 630,
        alt: 'og-image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlockCMD - Command your blocks',
    description: 'Explore blockchains with an intuitive product suite',
    creator: '@zxstim',
    images: ['/blockcmd-tbn.png'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex flex-col gap-8 items-center justify-center py-12 px-4 lg:p-16 font-mono">
            <div className="flex flex-col gap-12">
              {children}
              <Toaster />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}