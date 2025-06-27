import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-pink-50 text-gray-700 pt-10 pb-2 px-6 flex flex-col items-center border-t border-pink-100 mt-16">
      <div className="flex flex-col items-center mb-2">
        <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold tracking-widest bg-white mb-2">ZEYNO</div>
        <div className="font-bold italic text-2xl text-pink-400 mb-1">Zeyno</div>
        <div className="text-xs text-gray-500 mb-2">LIFE-CENTERED | DESIGN-INSPIRED</div>
      </div>
      <div className="w-full flex items-center justify-between border-t border-pink-100 pt-2 text-xs">
        <span>&copy;2025 · Built with curiosity and persistence</span>
        <div className="space-x-2">
          <a href="mailto:email@example.com" className="text-pink-400 hover:underline">Email</a>
          <span>|</span>
          <a href="#" className="text-pink-400 hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
} 