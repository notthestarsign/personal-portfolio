import Navbar from "@/components/ui/Navbar";
import { useEffect, useState } from "react";
import Footer from "@/components/ui/Footer";
import html from "@/assets/html.png";
import css from "@/assets/css.png";
import javascript from "@/assets/javascript.png";
import git from "@/assets/github.svg";
import python from "@/assets/python.png";

const TicTacToe = [
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JavaScript", src: javascript },
];

const Hangman = [
  { name: "Python", src: python },
];

const projects = [
  {
    title: "Tic-Tac-Toe",
    description: "A simple and classic web-based Tic-Tac-Toe game. It allows two players to play against each other locally.",
    tech: TicTacToe,
    github: "https://github.com/notthestarsign/Tic-Tac-Toe"
  },
  {
    title: "Advanced Hangman",
    description: "A feature-rich Hangman game following Agile development principles...",
    tech: Hangman,
    github: "https://github.com/notthestarsign/Hangman"
  }
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
    <div className="bg-gray-950 text-white">
      <Navbar />

      {/* Welcome to My projects */}
      <div className="p-10 flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-black to-gray-900 rounded-xl shadow-lg mx-10 mt-10">
        <div>
          <h1 className="text-4xl font-bold text-center mb-6">
            My Projects
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my studies and personal time. Each project showcases my skills in software development, problem-solving, and creativity.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="p-10 flex flex-row md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-black to-gray-900 rounded-xl shadow-lg mx-10 mt-10">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col items-center bg-yellow-600 h-auto md:w-1/4 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">{project.title}</h2>
            <p className="text-lg text-center mb-4">{project.description}</p>

            <div className="flex flex-row gap-6 justify-items-center">
              {project.tech.map(({ name, src }, techIdx) => (
                <div key={techIdx} className="flex flex-col items-center text-sm text-gray-300 hover:scale-110 transition-transform duration-300">
                  <img src={src} alt={name} className="w-40 h-20 object-contain" />
                  <span>{name}</span>
                </div>
              ))}
            </div>

            {project.github && (
              <div className="mt-6">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img src={git} alt="Github icon" className="w-12 h-12 md:w-14 md:h-14 object-contain mb-2" />
                </a>
              </div>
            )}
          </div>
        ))}
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
