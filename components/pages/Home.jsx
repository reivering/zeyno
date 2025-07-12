'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
      <div className=" rounded-none h-[91vh] bg-background flex flex-col" >
        {/* Header */}

        {/* Main Section */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <motion.div className="w-full rounded-t-[4vw] bg-base absolute bottom-0 h-[45vh] items-center justify-center py-16 px-24"
            initial={{ y: "45vh", }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", type: "spring", damping: 40, stiffness: 90 }}
          >
            <h1 className="text-white text-4xl md:text-[10vh] py-[6vh] font-bold font-inter text-left leading-tight" style={{lineHeight: '1em'}}>
              WE CREATE SITES.<br />
              REALLY GOOD ONES.
            </h1>
          </motion.div>
        </div>
      </div>
  );
} 