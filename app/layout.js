import "./globals.css";
import { Playfair_Display, Geist, Inter, Arimo, Archivo_Black, Syne, Archivo, Montserrat } from 'next/font/google';

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

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arima',
});

export const metadata = {
  title: 'Zeyno',
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${geist.variable} ${inter.variable} ${suranna.variable} ${syne.variable} ${archivo.variable} ${montserrat.variable} text-black bg-white min-h-screen`}>{children}</body>
    </html>
  );
} 