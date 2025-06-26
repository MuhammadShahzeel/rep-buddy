import { FiGithub } from "react-icons/fi"; // Add GitHub icon import

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center py-4">
        {/* Copyright Section */}
        <p className="text-xs sm:text-sm text-gray-300 flex justify-center sm:justify-start sm:mr-6">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold ml-1">Rep</span>
          <span className="text-emerald-400 font-semibold ml-1">Buddy</span>.
          All rights reserved.
        </p>

        {/* GitHub Link with Icon */}
        <div className="flex items-center mt-2 sm:mt-0">
          <a
            href="https://github.com/MuhammadShahzeel/rep-buddy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-medium hover:text-emerald-400"
          >
            <FiGithub size={20} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
