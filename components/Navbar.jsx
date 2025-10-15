'use client'
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-background/10 backdrop-blur-lg">
      <div className="mx-auto flex flex-col sm:flex-row py-2 sm:py-4 items-center justify-between w-full sm:w-[90vw] md:w-[85vw] lg:w-[80vw] px-4 sm:px-6 md:px-8 space-y-2 sm:space-y-0">
        <span className="font-bold text-xl sm:text-2xl tracking-tight font-inter">
          <Image 
            width="140" 
            height="20" 
            src="/zeynoinvert.png" 
            alt="zeynoinverted"
            className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
          />
        </span>
        <nav className="flex space-x-4 sm:space-x-6 md:space-x-8 font-inter text-sm sm:text-base md:text-lg lg:text-xl">
          <a href="/#about" className="font-medium hover:underline">about</a>
          <a href="/#services" className="font-medium hover:underline">services</a>
          <a href="#contact" className="font-medium hover:underline">contact</a>
        </nav>
      </div>
    </nav>
  );
}
