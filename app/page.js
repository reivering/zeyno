import Navbar from "../components/Navbar";
import Home from "../components/pages/Home";
import Footer from "../components/Footer";
import About from "../components/pages/About";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-playfair">
      <Navbar />
      <main className="flex-1">
        <Home />
        <About />
      </main>
      <Footer />
    </div>
  );
} 