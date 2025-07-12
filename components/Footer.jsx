import React from "react";

export default function Footer() {
  return (
    <div className="h-[50vh] relative w-full font-inter bg-neutral-900"> 
      <div>
        <h1> </h1>
      </div>
      <div className="absolute bottom-24 ml-40 w-[80vw] h-[1px] bg-neutral-800" />
      <div className="absolute left-[39vw] bottom-10">
        <h1 className="text-neutral-600 text-lg">&copy; 2025 Studio Zeyno. All Rights Reserved</h1>
      </div>
    </div>
  );
} 