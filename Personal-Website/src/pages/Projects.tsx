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
import shadcn from "@/assets/shadcn.png";
import php from "@/assets/php.png";
import phpmyadmin from "@/assets/phpmyadmin.svg";
import sql from "@/assets/sql.png";
import docker from "@/assets/docker.png";

const CalculatorTech = [
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JavaScript", src: javascript },
];

const TicTacToeTech = [
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JavaScript", src: javascript },
];

const HangmanTech = [{ name: "Python", src: python }];

const FutureFeedTech = [
  { name: "React", src: react },
  { name: "Tailwind", src: tailwind },
  { name: "JavaScript", src: javascript },
  { name: "Java", src: java },
  { name: "PostgreSQL", src: postgresql },
  { name: "Node.js", src: nodejs },
  { name: "AWS", src: aws },
  { name: "Python", src: python },
  { name: "Vercel", src: vercel },
  { name: "shadcn/ui", src: shadcn },
];

const PersonalWebsiteTech = [
  { name: "React", src: react },
  { name: "Tailwind", src: tailwind },
  { name: "Vercel", src: vercel },
  { name: "shadcn/ui", src: shadcn },
];

const FlashTech = [
  { name: "React", src: react },
  { name: "Tailwind", src: tailwind },
  { name: "shadcn/ui", src: shadcn },
];

const DocScannerTech = [{ name: "Python", src: python }];

const ToDoTech = [
  { name: "HTML", src: html },
  { name: "JavaScript", src: javascript },
  { name: "Tailwind", src: tailwind },
  { name: "PHP", src: php },
  { name: "phpMyAdmin", src: phpmyadmin },
  { name: "SQL", src: sql },
];

const CodeSentinelTech = [
  { name: "Python", src: python },
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JavaScript", src: javascript },
];

const MyQRTech = [
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JavaScript", src: javascript },
  { name: "Python", src: python },
];

const LinkForgeTech = [
  { name: "Java", src: java },
  { name: "Docker", src: docker},
];

const finishedProjects = [
  {
    title: "Future Feed (Capstone Project)",
    description:
      "A modern social media platform empowering users with full control over their feed using customizable presets and future AI bots.",
    tech: FutureFeedTech,
    github: "https://github.com/COS301-SE-2025/Future-Feed",
  },
  {
    title: "CodeSentinel",
    description:
      "An AI-powered code review tool that analyzes GitHub repositories or uploaded codebases and produces professional reports covering bug risks, security vulnerabilities, complexity warnings, and refactoring suggestions.",
    tech: CodeSentinelTech,
    github: "https://github.com/notthestarsign/CodeSentinel",
  },
  {
    title: "LinkForge",
    description: "A distributed URL shortener built from scratch",
    tech: LinkForgeTech,
    github: "https://github.com/notthestarsign/LinkForge",
  },
  {
    title: "My QR",
    description: "A modern qr-code scanner and qr-code generator.",
    tech: MyQRTech,
    github: "https://github.com/notthestarsign/my-qr",
  },
  {
    title: "To-Do - Modern Task Manager",
    description:
      "A modern task manager application built with html and Tailwind CSS, featuring php, sql and a clean UI.",
    tech: ToDoTech,
    github: "https://github.com/notthestarsign/To-Do",
  },
  {
    title: "Advanced Hangman",
    description:
      "A feature-rich Hangman game built with Python, following Agile principles with multiple difficulty levels and themes.",
    tech: HangmanTech,
    github: "https://github.com/notthestarsign/Hangman",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A simple and classic web-based Tic-Tac-Toe game. Two players compete locally on the same device.",
    tech: TicTacToeTech,
    github: "https://github.com/notthestarsign/Tic-Tac-Toe",
  },
  {
    title: "Calculator",
    description:
      "A web-based calculator that can perform both basic and scientific calculations with a user-friendly interface.",
    tech: CalculatorTech,
    github: "https://github.com/notthestarsign/Calculator",
  },
];

const ongoingProjects = [
  {
    title: "Personal Website (This Site)",
    description:
      "A personal portfolio website showcasing my projects, skills, and contact information, built with React and Tailwind CSS.",
    tech: PersonalWebsiteTech,
    github: "https://github.com/notthestarsign/personal-portfolio",
  },
  {
    title: "Flash",
    description:
      "Flash is an e-commerce platform for small businesses that don't have a platform to advertise and sell their products and services. Flash brings all this and more to your fingertips.",
    tech: FlashTech,
    github: "https://github.com/notthestarsign/Flash",
  },
  {
    title: "Document Scanner",
    description:
      "This document scanner will be built with OpenCV to detect edges, use the edges in the image to find the contour (outline) representing the piece of paper being scanned, and apply a perspective transform to obtain the top-down view of the document.",
    tech: DocScannerTech,
    github: "https://github.com/notthestarsign/Document-Scanner",
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

  const renderProjectCard = (project: (typeof finishedProjects)[0]) => (
    <div
      key={project.title}
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
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-black to-gray-900 rounded-xl shadow-2xl mx-4 md:mx-10 mt-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">My Projects</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
          A showcase of personal, academic, and ongoing work — from completed
          applications to my current capstone project.
        </p>
      </section>

      {/* Finished Projects */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          Finished Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {finishedProjects.map(renderProjectCard)}
        </div>
      </section>

      {/* In Progress / Ongoing Projects */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          In Progress / Ongoing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {ongoingProjects.map(renderProjectCard)}
        </div>
      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black px-5 py-3 rounded-full shadow-2xl hover:bg-yellow-300 transition duration-300 text-lg font-bold hover:cursor-pointer"
        >
          ↑ Back to Top
        </button>
      )}

      <Footer />
    </div>
  );
}
