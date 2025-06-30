import Navbar from "@/components/ui/Navbar";
import { useEffect, useState } from "react";
import Footer from "@/components/ui/Footer";

export default function Projects() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfway = window.innerHeight / 2;
      setShowScrollTop(window.scrollY > halfway);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      {/* Page content goes here */}
      <div className="p-6">
        
      </div>

      {/* Scroll Section */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 hover:cursor-pointer"
        >
          ↑ Back to Top
        </button>
      )}

      {/* Footer */}
      <Footer />
    </div>

  );
}
