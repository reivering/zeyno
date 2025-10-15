'use client';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Portfolios from "@/components/pages/Portfolios";

export default function Page() {

  return (
    <div className="flex flex-col min-h-screen bg-white font-inter relative overflow-hidden">

      <Navbar />
      <Portfolios />
    </div>
  );
}
