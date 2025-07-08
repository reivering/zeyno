import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

const About = () => {
  return (
      <main id="about" className="flex flex-col items-center justify-center min-h-screen w-full pt-32 bg-black">
        <section className="w-[75vw]  px-4">
          <h1 className="text-white  text-3xl md:text-4xl lg:text-6xl font-inter font-extralight leading-snug  mb-16">
            Architecting digital experiences that captivate, <br className="hidden md:inline" />
            convert and inspire through seamless functionality, <br className="hidden md:inline" />
            sophisticated design and strategic vision that <br className="hidden md:inline" />
            transforms brands into digital powerhouses.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-28 mb-20">
            <p className="text-white text-2xl md:text-4xl font-inter font-light text-left">
              Zeyno Studios crafts websites that don't just function, they mesmerize and drive meaningful results.
            </p>
            <p className="text-white text-2xl md:text-4xl font-inter font-light text-left md:text-left">
              We architect digital ecosystems where form meets function in perfect harmony.
            </p>
          </div>
        </section>
        <div className="w-full flex justify-center items-end flex-1">
          <span className="text-white text-[10vw] md:text-[12vw] lg:text-[14vw] font-bold font-archivo lowercase leading-none opacity-90 select-none">
            about
          </span>
        </div>
      </main>
  );
};

export default About;