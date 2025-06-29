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

      {/* Hero Section */}
      <div className="p-10 flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-black to-gray-900 rounded-xl shadow-lg mx-10 mt-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={personalPhoto2}
            alt="Profile"
            className="w-[280px] h-[400px] md:w-[350px] md:h-[450px] object-cover rounded-full border-4 border-yellow-400 shadow-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Hi, I'm Lesedi Manoto
          </h1>
          <p className="text-xl text-gray-300 font-medium">
            Final-year Computer Science Student at the University of Pretoria.
          </p>
          <p className="text-gray-400">
            Passionate about building innovative software, solving real-world problems, and constantly learning new technologies.<br />
            <br />
            Full-stack developer with a focus on software engineering and netcentric development.
            <br />
            <br />
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="/projects"
              className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center gap-2"
            >
              View Projects <FaArrowRight />
            </a>
            <a
              href="/resume"
              className="border border-yellow-400 px-5 py-2 rounded-full font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="mt-16 text-center mx-10 p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold underline underline-offset-4 text-yellow-400 mb-4">
          A Little About Me
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          I'm a dedicated software enthusiast who went from writing my first <code className="bg-gray-800 p-1 rounded">"Hello World"</code> to building full-stack projects. 
          I love tackling challenging problems, learning new concepts, and working on software that can make people's lives easier.
          <br /><br />
          Outside of coding, I enjoy music, writing, and continuously exploring new ways to grow—personally and professionally.
          <a
              href="/about"
              className="ml-75 mr-75 mt-6 px-9 py-2 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center gap-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              My Story <FaArrowRight />
            </a>
        </p>
      </div>

      {/* Tech Stack */}
      <div className="bg-gradient-to-br from-black to-gray-900 mx-10 mt-10">
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold underline underline-offset-4 text-yellow-400">
            Technologies I Work With
          </h2>

          <div className="relative w-full overflow-hidden py-10">
            {/* Fading edge gradients */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-950 to-transparent z-10" />

            {/* Scroll container */}
            <div className="mx-auto w-[90%] max-w-6xl overflow-hidden">
              <div className="flex w-max animate-scroll gap-6 whitespace-nowrap">
                {/* duplicate set */}
                {Array(2)
                  .fill([
                    "C++", "Java", "Python", "HTML", "CSS", "JavaScript", "React",
                    "Angular", "ShadCN/UI", "Node.js", "SQL",
                  ])
                  .flat()
                  .map((tech, idx) => (
                    <div
                      key={idx}
                      className="text-sm md:text-lg px-5 py-2 bg-gray-800 rounded-full text-yellow-400 font-medium shadow-md flex items-center"
                    >
                      <span className="mr-1 text-yellow-300"></span> {tech}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Animation CSS */}
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `}</style>
        </div>

        {/* Technology Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
          {techStack.map(({ name, src }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-sm text-gray-300 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={src}
                alt={name}
                className="w-12 h-12 md:w-14 md:h-14 object-contain mb-2"
              />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

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

      {/* Resume Section */}
      <div className="p-10 items-center justify-center bg-gradient-to-br from-black to-gray-900 rounded-xl shadow-lg mt-16 text-center mx-10">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4 underline underline-offset-4">
          Resume
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Interested in my academic background, skills, and certifications? <br />
          I have compiled a detailed resume that outlines my journey as a computer science student and software developer.
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="/resume"
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full flex items-center gap-2 hover:bg-yellow-300 transition"
          >
            View Resume <FaArrowRight />
          </a>
        </div>
      </div>
      
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
