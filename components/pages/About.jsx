import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

const About = () => {
  return (
      <main id="about" className="flex flex-col items-center justify-center min-h-screen w-full pt-32 bg-black">
        <section className="w-full max-w-6xl border px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-inter font-extralight leading-snug text-center mb-16">
            Architecting digital experiences that captivate, <br className="hidden md:inline" />
            convert and inspire through seamless functionality, <br className="hidden md:inline" />
            sophisticated design and strategic vision that <br className="hidden md:inline" />
            transforms brands into digital powerhouses.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <p className="text-white text-lg md:text-xl font-inter font-normal text-left">
              Zeyno Studios crafts websites that don't just function, they mesmerize and drive meaningful results.
            </p>
            <p className="text-white text-lg md:text-xl font-inter font-normal text-left md:text-right">
              We architect digital ecosystems where form meets function in perfect harmony.
            </p>
          </div>
        </section>
        <div className="w-full flex justify-center items-end flex-1">
          <span className="text-white text-[7vw] md:text-[8vw] lg:text-[10vw] font-bold font-syne lowercase leading-none opacity-90 select-none">
            about
          </span>
        </div>
      </main>
  );
};

export default About;