'use client'
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-background top-0 left-0 w-full z-50">
      <div className="mx-auto flex py-4 items-center justify-between w-[80vw]" >
      <span className="font-bold  text-2xl tracking-tight font-inter"  >
        <Image width="120" height="20" src="/zeynoinvert.png" alt="zeynoinverted" />
      </span>
        <nav className="flex space-x-8 font-inter text-base">
            <a href="#about" className=" text-lg font-medium hover:underline">about</a>
            <a href="#services" className=" text-lg font-medium hover:underline">services</a>
            <a href="#contact" className=" text-lg font-medium hover:underline">contact</a>
          </nav>
      </div>
    </nav>
  );
}
