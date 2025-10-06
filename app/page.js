'use client';
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Home from "../components/pages/Home";
import Footer from "../components/Footer";
import About from "../components/pages/About";
import ServicesTrifecta from "@/components/pages/ServicesTrifecta";
import Services from "@/components/pages/Services";
import Contact from "@/components/pages/Contact";
import IntroScreen from "@/components/pages/IntroScreen";

export default function Page() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white font-playfair relative overflow-hidden">
      {!introDone && <IntroScreen onFinish={() => setIntroDone(true)} />}

      <Navbar />
      <Home />
      <About />
      <ServicesTrifecta />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
