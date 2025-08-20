import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import Image from "next/image";

const About = () => {
  return (
    <main id="about" className="flex flex-col items-center bg-background justify-center min-h-screen w-full px-4 sm:px-6 md:px-8">
      <section className="w-full sm:w-[90vw] md:w-[85vw] h-[85vh] sm:h-[80vh] md:h-[75vh] border bg-black flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-8 rounded-[8vw] sm:rounded-[6vw] md:rounded-[5vw]">
        {/* Left side - Text content */}
        <div className="flex border-r-0 md:border-r md:border-r-white w-full md:w-[55%] h-[50%] md:h-[75%] md:ml-12 lg:ml-24 flex items-center justify-center md:justify-start" >
          <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-inter font-extralight leading-tight sm:leading-snug md:leading-normal text-center md:text-left px-4 sm:px-6 md:px-0" style={{lineHeight: "1.1em"}}>
            Architecting digital experiences that captivate,
            convert and inspire through{' '}
            <span className="text-[var(--color-base)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">seamless functionality, 
            sophisticated design and strategic vision</span>{' '}
            that transforms brands into digital powerhouses.
          </h1>
        </div>

        {/* Right side - Logo and text */}
        <div className="flex flex-col items-center justify-center w-full md:w-[35%] h-[35%] md:h-[75%] mt-4 md:mt-0">
          <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-12" >
            <Image 
              width="360" 
              height="200" 
              src="/studiozeyno.svg" 
              alt="zeynologo"
              className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 h-auto"
            />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-inter font-light text-white mt-2 text-center">
            a <span className="text-[var(--color-base)]">creative</span> agency
          </span>
        </div>
      </section>
    </main>
  );
};

export default About;

