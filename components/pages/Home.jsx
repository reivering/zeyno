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
      {/* Demo Content Toggle */}
      <div className="absolute bottom-8 right-8 flex items-center gap-2 z-10">
        <span className="text-white/70 font-medium text-base">Demo Content</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-10 h-6 bg-white/20 rounded-full peer peer-checked:bg-white/40 transition"></div>
          <div className="absolute left-1 top-1 bg-white/80 w-4 h-4 rounded-full transition peer-checked:translate-x-4"></div>
        </label>
      </div>
    </div>
  );
}