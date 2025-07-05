'use client'
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50">
      <div className="mx-auto flex py-4 items-center justify-between" style={{ width: '70vw' }}>
        <span className="font-extrabold text-white text-3xl tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
          ZEYNO
        </span>
        <div className="flex space-x-10 font-inter">
          <a href="#about" className="text-white font-normal text-lg hover:underline transition-all">About</a>
          <a href="#services" className="text-white font-normal text-lg hover:underline transition-all">Services</a>
          <a href="#contact" className="text-white font-normal text-lg hover:underline transition-all">Contact</a>
        </div>
      </div>
    </nav>
  );
}
