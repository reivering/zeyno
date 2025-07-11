import Navbar from "../components/Navbar";
import Home from "../components/pages/Home";
import Footer from "../components/Footer";
import About from "../components/pages/About";
import GradientBetween from "@/components/pages/GradientBlend";
import Services from "@/components/pages/Services";
import Contact from "@/components/pages/Contact";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-playfair">
      <Navbar />
        <Home />
        <GradientBetween />
        <About />
        <Services />
        <Contact />
      <Footer />
    </div>
  );
} 