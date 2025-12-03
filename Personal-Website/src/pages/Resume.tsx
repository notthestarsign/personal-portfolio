import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useEffect, useState } from "react";
import { Download, FileText, ExternalLink, AlertCircle } from "lucide-react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";

export default function Resume() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
        const handleScroll = () => {
          const halfway = window.innerHeight / 2;
          setShowScrollTop(window.scrollY > halfway);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  const RESUME_PDF_URL = "/CV Lesedi Manoto.pdf";

  return (
      <div className="min-h-screen bg-gray-950 text-white flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-center mb-6">
              My CV
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here you will find everything you need to know about my skills, experience, and education.
            </p>
          </div>

          {/* Resume Card */}
          <section className="bg-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50">
            <div className="bg-gradient-to-r from-yellow-600/20 via-amber-600/10 to-transparent p-8 md:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-400/10 rounded-xl">
                    <FileText className="w-10 h-10 text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Resume</h2>
                    <p className="text-gray-300 mt-1">Updated December 2025</p>
                  </div>
                </div>
                <span className="text-sm text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-full font-medium">
                  Available for opportunities
                </span>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="relative bg-black/40 min-h-96">
              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 z-10 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-yellow-400 border-t-transparent mx-auto mb-4"></div>
                    <p className="text-gray-300 text-lg">Loading resume...</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-500/10 z-10">
                  <div className="text-center p-8">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <p className="text-red-400 text-lg font-medium">Failed to load PDF</p>
                    <p className="text-gray-400 mt-2">Please try downloading directly</p>
                  </div>
                </div>
              )}

              {/* PDF Viewer - Responsive Height */}
              <div className="w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px]">
                <iframe
                  src={`${RESUME_PDF_URL}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                  className="w-full h-full border-0"
                  title="Lesedi Manoto - Resume (PDF)"
                  allowFullScreen
                  loading="lazy"
                  onLoad={() => {
                    setIsLoading(false);
                    setHasError(false);
                  }}
                  onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                  }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 md:p-8 bg-gray-800/50 border-t border-gray-700/50">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={RESUME_PDF_URL}
                  download="Lesedi_Manoto_Resume.pdf"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-yellow-400/25"
                >
                  <Download className="w-6 h-6 group-hover:animate-bounce" />
                  Download Resume
                </a>
                <a
                  href={RESUME_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-medium text-lg rounded-xl transition-all border border-gray-600 hover:border-gray-500"
                >
                  <ExternalLink className="w-5 h-5" />
                  Open in New Tab
                </a>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Tip: You can also right-click → "Save as" from the viewer above
              </p>
            </div>
          </section>

          {/* Projects Section */}
                <div className="p-10 items-center justify-center bg-gradient-to-br rounded-xl shadow-lg mt-16 text-center mx-10">
                  <h2 className="text-2xl font-semibold text-yellow-400 mb-4 underline underline-offset-4">
                    Projects
                  </h2>
                  <p className="text-gray-300 max-w-3xl mx-auto">
                    I have worked on various projects that showcase my skills in software development. <br />
                    Here’s a glimpseof my favorite projects:
                  </p>
                  <div className="flex justify-center mt-6">
                    <a
                      href="/projects"
                      className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full flex items-center gap-2 hover:bg-yellow-300 transition"
                    >
                      View Projects <FaArrowRight />
                    </a>
                  </div>
                </div>

        </main>

        {/* Scroll Section */}
      {showScrollTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 hover:cursor-pointer"
            >
              ↑ Back to Top
            </button>
          )}

        <Footer />
      </div>
  );
}