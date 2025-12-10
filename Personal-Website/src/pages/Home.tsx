import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import personalPhoto2 from "@/assets/Profile2.png";
import { FaArrowRight } from "react-icons/fa";
import cpp from "@/assets/cpp.png";
import java from "@/assets/java.png";
import python from "@/assets/python.png";
import html from "@/assets/html.png";
import css from "@/assets/css.png";
import javascript from "@/assets/javascript.png";
import react from "@/assets/react.png";
import angular from "@/assets/angular.png";
import nodejs from "@/assets/nodejs.png";
import sql from "@/assets/sql.png";
import tailwind from "@/assets/tailwind.png";
import git from "@/assets/github.svg";
import { useEffect, useState } from "react";

const techStack = [
  { name: "C++", src: cpp },
  { name: "Java", src: java },
  { name: "Python", src: python },
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JavaScript", src: javascript },
  { name: "React", src: react },
  { name: "Angular", src: angular },
  { name: "Node.js", src: nodejs },
  { name: "SQL", src: sql },
  { name: "Tailwind", src: tailwind },
  { name: "Git", src: git },
];

export default function Home() {
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
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      {/* Hero Section - Fixed for mobile */}
      <div className="px-5 py-10 sm:px-10 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 bg-gradient-to-br from-black to-gray-900 rounded-xl shadow-lg mx-4 sm:mx-6 md:mx-10 mt-8 md:mt-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={personalPhoto2}
            alt="Profile"
            className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] lg:w-96 lg:h-[500px] object-cover rounded-full border-4 border-yellow-400 shadow-2xl"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 leading-tight">
            Hi, I'm Lesedi Manoto
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-medium">
            Final-year Computer Science Student at the University of Pretoria.
          </p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Passionate about building innovative software, solving real-world problems, and constantly learning new technologies.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Full-stack developer with a focus on software engineering and netcentric development.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <a
              href="/projects"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center justify-center gap-2"
            >
              View Projects <FaArrowRight />
            </a>
            <a
              href="/resume"
              className="border border-yellow-400 px-6 py-3 rounded-full font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="mt-12 sm:mt-16 px-5 sm:px-10 md:px-20 lg:px-32 py-10 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold underline underline-offset-4 text-yellow-400 mb-6">
          A Little About Me
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          I'm a dedicated software enthusiast who went from writing my first{" "}
          <code className="bg-gray-800 px-2 py-1 rounded text-sm">"Hello World"</code> to building full-stack projects. 
          I love tackling challenging problems, learning new concepts, and working on software that can make people's lives easier.
          <br /><br />
          Outside of coding, I enjoy music, writing, and continuously exploring new ways to grow—personally and professionally.
        </p>

        {/* Fixed button alignment */}
        <div className="mt-8 flex justify-center">
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition"
          >
            My Story <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gradient-to-br from-black to-gray-900 mx-4 sm:mx-6 md:mx-10 mt-12 sm:mt-16 px-5 py-12 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold underline underline-offset-4 text-yellow-400 text-center mb-10">
          
          Technologies I Work With
        </h2>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden py-8">
          <div className="absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-gray-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-gray-950 to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="flex w-max animate-scroll gap-4 sm:gap-6">
              {Array(2)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex gap-4 sm:gap-6">
                    {techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="px-4 sm:px-5 py-2 bg-gray-800 rounded-full text-yellow-400 font-medium text-sm sm:text-base whitespace-nowrap shadow-md"
                      >
                        {tech.name}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Grid Logos */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 mt-12 justify-items-center px-4">
          {techStack.map(({ name, src }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-xs sm:text-sm text-gray-300 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={src}
                alt={name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mb-2"
              />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects & Resume Sections */}
      {["Projects", "Resume"].map((section, idx) => (
        <div
          key={section}
          className={`p-8 sm:p-12 md:p-16 mx-4 sm:mx-6 md:mx-10 mt-12 sm:mt-16 rounded-xl shadow-lg text-center bg-gradient-to-br ${
            idx === 0 ? "from-black to-gray-900" : "from-black to-gray-900"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-4 underline underline-offset-4">
            {section}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            {section === "Projects"
              ? "I have worked on various projects that showcase my skills in software development. Here’s a glimpse of my favorite ones:"
              : "Interested in my academic background, skills, and certifications? I have compiled a detailed resume that outlines my journey."}
          </p>
          <div className="mt-8">
            <a
              href={section.toLowerCase()}
              className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
            >
              View {section} <FaArrowRight />
            </a>
          </div>
        </div>
      ))}

      {/* Scroll to Top Button - Better positioning */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black px-5 py-3 rounded-full shadow-2xl hover:bg-yellow-300 transition duration-300 text-lg font-bold"
        >
          ↑ Back to Top
        </button>
      )}

      <Footer />
      
      {/* Keep your animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
}