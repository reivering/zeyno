'use client'
import React from "react";
import DarkVeil from '../ui/DarkVeil';

export default function Home() {
  return (
    <div className="relative h-screen w-full font-inter flex items-center justify-center overflow-hidden">
      {/* DarkVeil as background */}
      <DarkVeil className="absolute inset-0 w-full h-full z-0" />

      {/* Content on top of DarkVeil */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* New Background Button */}
        <div className="mb-8 mt-20">
          <button className="px-6 py-2 rounded-full bg-base border border-white/30 text-white font-medium text-md backdrop-blur-md shadow-md hover:bg-black/20 transition">
            <a href="#about">Take a tour</a>
            
          </button>
        </div>
        {/* Main Heading */}
        <h1 className="text-base text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight mb-8 font-inter">
          WE CREATE SITES.<br />REALLY GOOD ONES.
        </h1>
        {/* Buttons */}
        <div className="flex gap-4 mb-2">
          <button className="px-8 py-3 rounded-full bg-white text-[#222] font-medium text-lg shadow hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full bg-white/10 border border-base text-base font-medium text-lg hover:bg-white/20 transition">
            Learn More
          </button>
        </div>
      </div>
      
    </div>
  );
}