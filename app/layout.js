import "./globals.css";

export const metadata = {
  title: 'Zeyno',
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">{children}</body>
    </html>
  );
} 