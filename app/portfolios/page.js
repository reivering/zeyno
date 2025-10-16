
import React from 'react';
import Navbar from "@/components/Navbar";
import Portfolios from "@/components/pages/Portfolios";

export const metadata = {
  title: 'Our Work | Zeyno Studios',
  description: 'Explore creative projects and portfolios from Zeyno Studios.',
};

export default function Page() {

  return (
    <div className="flex flex-col min-h-screen bg-white font-inter relative overflow-hidden">

      <Navbar />
      <Portfolios />
    </div>
  );
}
