import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="relative w-full font-inter bg-neutral-900 py-10 md:h-[50vh]">
      {/* Wrapper */}
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-evenly md:mt-12">
        {/* Logo */}
        <div className="flex justify-center w-2/3 md:w-[22%] md:h-[30vh]">
          <a href="/">
            <Image
              className="mb-6 md:mb-20"
              src="/studiozeyno.svg"
              width={300}
              height={20}
              alt="ZeynoLogo"
            />
          </a>
        </div>

        {/* Midsection Links */}
        <div className="grid grid-cols-2 gap-8 text-center text-white md:flex md:flex-row md:text-left md:justify-between md:w-[26%] md:h-[30vh] md:p-4">
          <div className="flex flex-col gap-4 p-2 md:p-4">
            <h1 className="text-[var(--color-base)] text-2xl md:text-4xl font-montserrat">
              Agency
            </h1>
            <p className="font-extralight text-lg md:text-xl">
              <a href="#about">About</a>
            </p>
            <p className="font-extralight text-lg md:text-xl">
              <a href="#services">Services</a>
            </p>
            <p className="font-extralight text-lg md:text-xl">
              <a href="#contact">Contact</a>
            </p>
          </div>
          <div className="flex flex-col gap-4 p-2 md:p-4">
            <h1 className="text-[var(--color-base)] text-2xl md:text-4xl font-montserrat">
              Contact
            </h1>
            <p className="font-extralight text-lg md:text-xl">Email</p>
            <p className="font-extralight text-lg md:text-xl">LinkedIn</p>
          </div>
        </div>

        {/* Book order */}
        <div className="flex justify-center w-2/3 md:w-[22%] md:h-[30vh]">
          <div className="bg-base px-6 py-2 mt-4 text-lg md:mt-10 md:h-12 md:text-2xl font-light rounded-[5vw] md:rounded-[2vw]">
            Book a Demo
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[80%] mx-auto my-8 h-[1px] bg-neutral-800 md:absolute md:bottom-24 md:ml-44 md:w-[80vw]" />

      {/* Copyright */}
      <div className="text-center md:text-left md:absolute md:left-[39vw] md:bottom-10">
        <h1 className="text-neutral-600 text-sm md:text-lg">
          &copy; 2025 Studio Zeyno. All Rights Reserved
        </h1>
      </div>
    </div>
  );
}
