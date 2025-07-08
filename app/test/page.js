'use client'
import Navbar from "@/components/Navbar";


export default function Page() {
  return (
    <div className="flex relative flex-col min-h-screen bg-white font-playfair">
      <Navbar />
      <main className="flex-1 relative mt-48">
        <h1 className="text-black relative text-4xl font-bold border-2 border-red-500">Test</h1>
      </main>
      
    </div>
  );
} 