// Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md"; // yarn add react-icons  or  npm i react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="mx-4 sm:mx-8 md:mx-20 lg:mx-60 mt-6 px-6 py-3 border-2 border-yellow-400 rounded-full flex items-center justify-between bg-gray-900 text-white">
      {/* Empty divs keep the content perfectly centered */}
      <div className="w-10 md:w-auto" />
      
      {/* Desktop menu - hidden on <md */}
      <ul className="hidden md:flex items-center space-x-8 font-semibold">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="hover:underline hover:text-yellow-400 underline-offset-4 transition-colors p-10"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <MdClose className="w-7 h-7 text-yellow-400" />
        ) : (
          <MdMenu className="w-7 h-7" />
        )}
      </button>

      {/* Mobile fullscreen overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm flex flex-col items-center justify-center gap-10 text-2xl font-semibold md:hidden z-40">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} // close menu on click
              className="hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <div className="w-10 md:w-auto" />
    </nav>
  );
}