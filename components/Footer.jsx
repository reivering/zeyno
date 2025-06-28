import React from "react";

export default function Footer() {
  return (
    <footer className="w-full text-gray-700 pt-10 pb-0 flex flex-col items-center border-t border-pink-100 mt-16">
      <div className="flex flex-col items-center mb-2">
        <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold tracking-widest bg-white mb-2">ZEYNO</div>
        <div className="font-bold italic text-2xl text-pink-400 mb-1">Zeyno</div>
        <div className="text-xs text-gray-500 mb-2 font-inter">LIFE-CENTERED | DESIGN-INSPIRED</div>
      </div>
      <div className="w-full p-4 flex flex-col justify-center items-center bg-pink-100 bottom-3 text-center text-lg space-y-2">
        <div>&copy;2025 · Built with curiosity and persistence</div>
        <div className="space-x-2 text-lg w-full flex justify-end font-inter">
          <a href="mailto:email@example.com" className="text-pink-400 hover:underline">Email</a>
          <span>|</span>
          <a href="#" className="text-pink-400 hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
} 