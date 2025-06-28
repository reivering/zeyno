import React from "react";

export default function Footer() {
  return (
    <footer className="w-full text-gray-700 pt-10 pb-0 flex flex-col items-center border-t border-pink-100 mt-16">
      <div className="flex flex-col items-center mb-2">
        <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold tracking-widest bg-white mb-2">ZEYNO</div>
        <div className="font-bold italic text-2xl text-pink-400 mb-1">Zeyno</div>
        <div className="text-xs text-gray-500 mb-2 font-inter">LIFE-CENTERED | DESIGN-INSPIRED</div>
      </div>
      <div className="w-full flex relative items-center justify-end border-t border-pink-100 pt-2 text-xs">
      </div>
      <div className="w-full p-4 flex justify-center bg-pink-100 bottom-3 text-center text-lg ">&copy;2025 · Built with curiosity and persistence
        <div className="space-x-2 absolute right-0  px-2 text-lg font-inter ">
          <a href="mailto:email@example.com" className="text-pink-400  hover:underline">Email</a>
          <span>|</span>
          <a href="#" className="text-pink-400 hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
} 