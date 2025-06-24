import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";
import {
  FaUser,
  FaCode,
  FaEnvelope,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left side (Image section with yellow border) */}
      <div className="w-1/2 flex items-center justify-left bg-black relative">
        <div className="relative max-w-[90%]">
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-auto rounded-md object-cover shadow-lg border-4 border-yellow-400"
          />
        </div>
      </div>

      {/* Right side (Text content section) */}
      <div className="w-1/2 flex flex-col justify-center px-10 ">
        <h2 className="text-yellow-400 text-xl font-semibold mb-2">— HELLO, I'M LESEDI MANOTO.</h2>
        <h1 className="text-4xl font-extrabold mb-4 text-yellow-400">COMPUTER SCIENCE STUDENT</h1>
        <p className="text-gray-400 max-w-md mb-6">
          I'm a Pretoria based 3rd year BSc Computer Science student driven by passion to have the hunger to learn more. 
          I am passionate about building excellent software that improves the lives of those around me.
        </p>
        <Button
          variant="outline"
          className="group bg-transparent border-lime-400 text-yellow-400 hover:bg-lime-400 hover:text-black transition rounded-full px-6 py-2"
        >
          MORE ABOUT ME
          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Floating Icon Menu */}
        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4">
          <IconCircle icon={<FaUser />} />
          <IconCircle icon={<FaCode />} />
          <IconCircle icon={<FaEnvelope />} />
          <IconCircle icon={<FaComments />} />
        </div>
      </div>
    </div>
  );
}

function IconCircle({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="bg-yellow-400 text-black p-2 rounded-full cursor-pointer hover:bg-yellow-300 transition">
      {icon}
    </div>
  );
}