
import "./globals.css";
import { Playfair_Display, Geist, Inter, Archivo_Black, Syne, Raleway, Work_Sans, Montserrat } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

const archivo = Archivo_Black({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: '400',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway'
})

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-worksans'
})

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


export const metadata = {
  title: 'Zeyno Studios',
  description: 'Welcome to Zeyno Studios - Crafting Stunning Websites with Cutting-Edge Design and Development.',
  keywords: 'design, web development, portfolio, zeyno',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="xxxxx.html" />
      </head>
      <body className={`${playfairDisplay.variable} ${work_sans.variable} ${raleway.variable} ${geist.variable} ${inter.variable} ${syne.variable} ${archivo.variable} ${montserrat.variable} text-black bg-white min-h-screen`}>{children}</body>
    </html>
  );
} 