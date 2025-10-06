'use client'
import React from "react";
import { motion } from "framer-motion";
import DarkVeil from '../ui/DarkVeil';


export default function Home() {
  return (
    <div className="h-screen flex flex-col items-start justify-center bg-background">
  <DarkVeil />
      <h1 className="text-white text-4xl md:text-[10vh] py-[6vh] font-bold font-inter text-left leading-tight" style={{lineHeight: '1em'}}>
                WE CREATE SITES.<br />
                REALLY GOOD ONES.
      </h1>  

    </div>
  );
} 