import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 py-6 text-center border-t border-yellow-400">
      <p className="text-gray-400 mb-4">Let's connect:</p>
              <div className="flex justify-center gap-6 text-yellow-400 text-2xl">
                <Link to="https://github.com/notthestarsign" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </Link>
                <Link to="www.linkedin.com/in/lesedimanoto" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </Link>
                <Link to="mailto:lesedielliotmanoto06@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope />
                </Link>
              </div>
              <p className="text-gray-600 text-sm mt-4">© {new Date().getFullYear()} Lesedi Manoto</p>
    </footer>
  );
}
