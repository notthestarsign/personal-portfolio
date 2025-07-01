import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="md:w-1/2 flex items-center justify-center bg-black p-6">
        <div className="relative w-72 md:w-96">
          <div className="absolute -top-3 -left-3 w-4 h-4 bg-yellow-400 rounded-full shadow-lg"></div>
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-auto rounded-lg border-4 border-yellow-400 shadow-xl"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col justify-center px-8 py-12 md:py-0">
        <h2 className="text-yellow-400 text-lg font-medium mb-2">
          HELLO, I'M LESEDI MANOTO
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400 leading-tight">
          COMPUTER SCIENCE STUDENT
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-xl mb-6 leading-relaxed">
          I'm a Pretoria-based 3rd year BSc Computer Science student with a passion for learning and innovation.
          I love building software that makes life easier and more meaningful.
        </p>

        <Link to="/home" className="flex items-center gap-3 dark:hover:text-white ">
          <Button
            variant="outline"
            className="group bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition rounded-full px-6 py-2 w-max hover:cursor-pointer"
          >
            MORE ABOUT ME
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}


