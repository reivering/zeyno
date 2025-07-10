import React from "react";

export default function Home() {
  return (
      <div className="w-[95vw] max-w-6xl mt-6 mb-6 rounded-none bg-[#fdf1e3] flex flex-col" style={{ boxShadow: '0 0 0 8px #232323' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full pt-6 px-8">
          <span className="font-bold text-2xl text-[#f47c4c] tracking-tight" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>
            <span className="block text-xs text-[#232323] font-normal mb-1" style={{ letterSpacing: '0.1em' }}>STUDIO</span>
            zeyno
          </span>
          <nav className="flex space-x-8">
            <a href="#about" className="text-[#f47c4c] text-base font-medium hover:underline">about</a>
            <a href="#services" className="text-[#f47c4c] text-base font-medium hover:underline">services</a>
            <a href="#contact" className="text-[#f47c4c] text-base font-medium hover:underline">contact</a>
          </nav>
        </div>
        {/* Main Section */}
        <div className="flex-1 flex flex-col justify-center items-center mt-8 mb-8">
          <div className="w-full rounded-t-3xl bg-[#f47c4c] flex flex-col items-center justify-center py-16 px-4">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center leading-tight" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}>
              WE CREATE SITES.<br />
              REALLY GOOD ONE'S.
            </h1>
          </div>
        </div>
      </div>
  );
} 