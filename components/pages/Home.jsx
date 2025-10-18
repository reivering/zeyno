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
          <button className="px-8 py-3 rounded-full bg-base border border-white/30 text-white font-medium text-lg backdrop-blur-md shadow-md hover:bg-black/20 transition">
            <a href="#about">Take a tour</a>
            
          </button>
        </div>
        {/* Main Heading */}
        <h1 className="text-base text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center leading-tight mb-8 font-inter">
          WE CREATE SITES.<br />REALLY GOOD ONES.
        </h1>
      </div>
      
    </div>
  );
}