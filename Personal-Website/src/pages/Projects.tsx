import Navbar from "@/components/ui/Navbar";
import { useEffect, useState } from "react";
import Footer from "@/components/ui/Footer";
import html from "@/assets/html.png";
import css from "@/assets/css.png";
import javascript from "@/assets/javascript.png";
import git from "@/assets/github.svg";
import python from "@/assets/python.png";
import react from "@/assets/react.svg";
import java from "@/assets/java.png";
import postgresql from "@/assets/postgresql.png";
import nodejs from "@/assets/nodejs.png";
import aws from "@/assets/aws.png";
import vercel from "@/assets/vercel.png";
import tailwind from "@/assets/tailwind.png";

const TicTacToe = [
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JavaScript", src: javascript },
];

const Hangman = [{ name: "Python", src: python }];

const Future_Feed = [
  { name: "React", src: react },
  { name: "Tailwind", src: tailwind },
  { name: "JavaScript", src: javascript },
  { name: "Java", src: java },
  { name: "PostgreSQL", src: postgresql },
  { name: "Node.js", src: nodejs },
  { name: "AWS", src: aws },
  { name: "Python", src: python },
  { name: "Vercel", src: vercel },
];

const projects = [
  {
    title: "Future Feed (Capstone Project)",
    description: "A modern social media platform empowering users with full control over their feed using customizable presets and future AI bots.",
    tech: Future_Feed,
    github: "https://github.com/COS301-SE-2025/Future-Feed",
  },
  {
    title: "Advanced Hangman",
    description: "A feature-rich Hangman game built with Python, following Agile principles with multiple difficulty levels and themes.",
    tech: Hangman,
    github: "https://github.com/notthestarsign/Hangman",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A simple and classic web-based Tic-Tac-Toe game. Two players compete locally on the same device.",
    tech: TicTacToe,
    github: "https://github.com/notthestarsign/Tic-Tac-Toe",
  },
  
];

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
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-black to-gray-900 rounded-xl shadow-2xl mx-4 md:mx-10 mt-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">My Projects</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
          A collection of personal and academic projects showcasing full-stack development, problem-solving, and modern web technologies.
        </p>
      </section>

      {/* Projects Grid - Equal Height & Responsive */}
      <section className="py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/50 rounded-xl p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 h-full"
            >
              {/* Title */}
              <h2 className="text-2xl font-bold text-center mb-4 text-yellow-400">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-center flex-grow text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 justify-center my-6">
                {project.tech.map(({ name, src }, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center group"
                    title={name}
                  >
                    <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                      <img
                        src={src}
                        alt={name}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                    <span className="text-xs text-gray-400 mt-1">{name}</span>
                  </div>
                ))}
              </div>

              {/* GitHub Link */}
              {project.github && (
                <div className="text-center mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-medium hover:bg-gray-200 transition shadow-lg"
                  >
                    <img src={git} alt="GitHub" className="w-6 h-6" />
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Back to Top Button */}
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