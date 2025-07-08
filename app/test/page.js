'use client'
import Navbar from "@/components/Navbar";
import ScrollingBackgroundShaderPage from "@/components/pages/extrapages/ScrollingBackgroundGradientDemo";

export default function Page() {
  return (
    <div className="flex relative flex-col min-h-screen bg-white font-playfair">
      <Navbar />
      <ScrollingBackgroundShaderPage    />
      
    </div>
  );
} 