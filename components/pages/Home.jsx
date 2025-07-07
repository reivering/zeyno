import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <main className="flex flex-col items-center justify-center min-h-screen w-full pt-32">
        <section className="flex flex-col items-center justify-center w-full">
          <h1 className="text-white text-center text-5xl md:text-7xl font-suranna font-normal leading-tight mb-6">
            We Craft<br />
            Human-Centric<br />
            Websites
          </h1>
          <button className="mt-2 px-6 py-2 border border-white text-white rounded-md hover:bg-white font-inter hover:text-black transition-all text-lg font-normal">
            Book a Call
          </button>
        </section>
        <section className="w-full mt-20">
          <h2 className="text-white text-center text-3xl md:text-5xl font-inter font-normal tracking-tight">
            High-converting. Lightning-fast. Seamlessly responsive.
          </h2>
        </section>
      </main>
    </BackgroundGradientAnimation>
  );
} 