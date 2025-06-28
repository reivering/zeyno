import React from "react";
import { trifectaCards, projectCards } from "../lib/cards";

const colorMap = {
  pink: "border-pink-300 bg-pink-100",
  yellow: "border-yellow-200 bg-yellow-100",
  green: "border-green-200 bg-green-100",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center mt-16 mb-8">
        <div className="text-pink-400 italic text-2xl font-semibold mb-2 mt-10">Zeyno</div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-2 text-black">ninte amma and ninte ammiamma in<br/>my room yes?</h1>
        <div className="text-pink-400 text-base md:text-lg tracking-widest mb-10 text-center w-full font-inter">
          DESIGN STRATEGIST &middot; SERVICE DESIGNER &middot; DESIGN STRATEGIST &middot; SERVICE DESIGNER &middot;
        </div>
        <div className="animate-bounce mb-10">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <path 
              d="M6 9L12 15L18 9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Trifecta Section */}
      <section className="w-full max-w-6xl mx-auto flex flex-col items-center mb-20">
        <h2 className="text-2xl font-bold text-center mb-6">
          My design trifecta for <span className="italic text-pink-400">Intelligence</span>, <span className="italic text-pink-400">Design</span>, and <span className="italic text-pink-400">Integration</span> solutions:
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
          {trifectaCards.map((card, idx) => (
            <div
              key={card.title}
              className={`flex-1 rounded-xl shadow-md border-t-8 ${colorMap[card.color]} bg-white p-6 min-w-[260px] max-w-sm mx-auto`}
            >
              <div className="font-bold italic text-lg mb-2 text-center text-black">{card.title}</div>
              <ul className="list-disc pl-5 text-sm text-black">
                {card.description.map((desc, i) => (
                  <li className="font-geist" key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-6xl mx-auto flex flex-col items-center mb-20">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectCards.map((card, idx) => (
            <div
              key={card.title + idx}
              className={`rounded-xl shadow-md border-2 ${colorMap[card.color]} bg-white p-6 min-h-[220px] flex flex-col`}
            >
              <div className="italic text-xs text-black mb-1">{card.subtitle}</div>
              <div className="font-bold text-lg mb-1 text-black">{card.title}</div>
              <div className="text-sm text-black mb-2">{card.description}</div>
              {/* Placeholder for image */}
              <div className="flex-1 flex items-end">
                <div className="w-full h-20 bg-gray-100 rounded mt-2 flex items-center justify-center text-black text-xs">Project Image</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 