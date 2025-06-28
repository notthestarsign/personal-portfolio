import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="mx-60 mt-6 px-6 py-3 border-2 border-yellow-400 rounded-full flex items-center justify-between bg-gray-900 text-white">
      <div className=""></div>

      {/* Nav Links */}
      <ul className="flex space-x-8 font-semibold">
        <Link to="/home">
            <li className="hover:underline hover:text-yellow-400 underline-offset-4 cursor-pointer">
            Home
            </li>
        </Link>
        
        <li className="">|</li>
        <Link to="/projects">
            <li className="hover:underline hover:text-yellow-400 underline-offset-4 cursor-pointer">
            Projects
            </li>
        </Link>

        <li className="">|</li>
        <Link to="/resume">
            <li className="hover:underline hover:text-yellow-400 underline-offset-4 cursor-pointer">
            Resume
            </li>
        </Link>

        <li className="">|</li>
        <Link to="/about">
            <li className="hover:underline hover:text-yellow-400 underline-offset-4 cursor-pointer">
            About
            </li>
        </Link>
      </ul>

      <div className=""></div>
    </nav>
  );
}
