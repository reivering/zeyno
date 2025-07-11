'use client'
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-background top-0 left-0 w-full z-50">
      <div className="mx-auto flex py-4 items-center justify-between w-[80vw]" >
      <span className="font-bold  text-2xl text-text tracking-tight font-inter" >
            <span className="block text-xs text-secondary font-normal" style={{ letterSpacing: '0.1em' }}>STUDIO</span>
            <h1 className="text-base text-[2vw]" style={{lineHeight: "0.6em"}} >zeyno</h1>
          </span>
        <nav className="flex space-x-8 font-inter">
            <a href="#about" className=" text-base font-medium hover:underline">about</a>
            <a href="#services" className=" text-base font-medium hover:underline">services</a>
            <a href="#contact" className=" text-base font-medium hover:underline">contact</a>
          </nav>
      </div>
    </nav>
  );
}
