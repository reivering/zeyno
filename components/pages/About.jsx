import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import Image from "next/image";

const About = () => {
  return (
      <main id="about" className="flex  flex-col items-center bg-background justify-center min-h-screen w-full">
        <section className="w-[85vw] h-[75vh] border bg-black flex items-center px-4 rounded-[5vw]">
          <div className="flex border-r w-[55%] h-[75%] ml-24 flex items-center" >
            <h1 className="text-white  text-4xl md:text-4xl lg:text-[3vw] font-inter font-extralight leading-snug  mb-16 " style={{lineHeight: "0.9em"}}>
              Architecting digital experiences that captivate,
              convert and inspire through <span className="text-base text-4xl md:text-4xl lg:text-[3vw]">seamless functionality, 
              sophisticated design and strategic vision</span> that 
              transforms brands into digital powerhouses.
            </h1>

          </div>

          <div className="flex flex-col items-center justify-center  w-[35%] h-[75%]">
            <div className="flex flex-col  p-12" >
              <Image width="360" height="200" src="/studiozeyno.svg" alt="zeynologo" />
            </div>
            <span className="text-xl font-inter font-light text-white mt-2">
              a <span className="text-[var(--color-base)]">creative</span> agency
            </span>
          </div>
          
        </section>
      </main>
  );
};

export default About;

