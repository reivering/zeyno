import Image from "next/image";
import React from "react";


export default function Footer() {
  return (
    <div className="h-[50vh] relative w-full font-inter bg-neutral-900"> 
      <div className="flex justify-evenly mt-12">
        <div className="h-[30vh] w-[22%] flex justify-center">
          <a href="#">
            <Image className="mb-20"  src="/studiozeyno.svg" width='300' height="20" alt="ZeynoLogo" />
          </a>
        </div> 
        {/* Midsection Links */}
        <div className="h-[30vh] w-[26%]  flex p-4 text-white justify-between">
          <div className="flex flex-col  p-4 gap-4">
            <h1 className="text-[var(--color-base)] text-4xl font-montserrat">Agency</h1>
            <p className="font-extralight text-xl"><a href="#about">About</a></p>
            <p className="font-extralight text-xl"><a href="#services">Services</a></p>
            <p className="font-extralight text-xl"><a href="#contact">Contact</a></p>
          </div>
          <div className="flex flex-col  p-4 gap-4">
            <h1 className="text-[var(--color-base)] text-4xl font-montserrat">Contact</h1>
            <p className="font-extralight text-xl">Email</p>
            <p className="font-extralight text-xl">LinkedIn</p>
          </div>
        </div>
        {/* Book order */}
        <div className="h-[30vh] w-[22%] flex justify-center border-white">
          <div className="bg-base p-2 ml-4 px-6 mt-10 h-12 text-2xl font-light rounded-[2vw]">Book a Demo</div>
        </div>
      </div>
      <div className="absolute bottom-24 ml-44 w-[80vw] h-[1px] bg-neutral-800" />
      <div className="absolute left-[39vw] bottom-10">
        <h1 className="text-neutral-600 text-lg">&copy; 2025 Studio Zeyno. All Rights Reserved</h1>
      </div>
    </div>
  );
} 