import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async () => {
    const email = "lesedielliotmanoto06@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer className="mt-20 py-6 text-center border-t border-yellow-400">
      <p className="text-gray-400 mb-4">Let's connect:</p>

      <div className="flex justify-center items-center gap-8 text-yellow-400 text-2xl relative">
        <a
          href="https://github.com/notthestarsign"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-yellow-300 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/lesedimanoto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-yellow-300 transition"
        >
          <FaLinkedin />
        </a>

        {/* Email - Copy to clipboard */}
        <button
          onClick={handleEmailClick}
          className="relative group focus:outline-none"
          aria-label="Copy email address"
        >
          {copied ? (
            <FaCheck className="text-green-400" />
          ) : (
            <FaEnvelope className="hover:text-yellow-300 transition" />
          )}

          {/* Tooltip / Feedback */}
          <span
            className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap transition-opacity duration-200 ${
              copied ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            Email copied!
          </span>
        </button>
      </div>

      <p className="text-gray-600 text-sm mt-6">
        © {new Date().getFullYear()} Lesedi Manoto
      </p>
    </footer>
  );
}