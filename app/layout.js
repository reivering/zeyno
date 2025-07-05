import "./globals.css";
import { Playfair_Display, Geist, Inter, Suranna } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const suranna = Suranna({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-suranna',
  weight: '400',
});

export const metadata = {
  title: 'Zeyno',
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${geist.variable} ${inter.variable} ${suranna.variable} text-black bg-white min-h-screen`}>{children}</body>
    </html>
  );
} 