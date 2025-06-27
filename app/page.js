import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
} 