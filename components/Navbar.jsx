'use client'
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white border-b border-gray-100">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold tracking-widest bg-white">
          ZEYNO
        </div>
      </div>
      <div className="flex items-center space-x-8 text-base font-medium">
        <a href="#" className="text-pink-400">HOME</a>
        <a href="#" className="text-black hover:text-pink-400">PROJECTS</a>
        <a href="#" className="text-black hover:text-pink-400">ABOUT</a>
      </div>
    </nav>
  );
}
