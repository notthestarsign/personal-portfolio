import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:lesedielliotmanoto06@gmail.com";
  };
  return (
    <footer className="mt-20 py-6 text-center border-t border-yellow-400">
      <p className="text-gray-400 mb-4">Let's connect:</p>
              <div className="flex justify-center gap-6 text-yellow-400 text-2xl">
                <a href="https://github.com/notthestarsign" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/lesedimanoto" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>

                {/* Then use: */}
                <a href="mailto:lesedielliotmanoto06@gmail.com" onClick={handleEmailClick} aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
              <p className="text-gray-600 text-sm mt-4">© {new Date().getFullYear()} Lesedi Manoto</p>
    </footer>
  );
}
