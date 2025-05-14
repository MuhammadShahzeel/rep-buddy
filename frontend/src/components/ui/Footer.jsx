const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-4">
        <p className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-emerald-400/90 to-cyan-400/90 bg-clip-text text-transparent font-medium">
            Rep Buddy
          </span>
          . All rights reserved.
        </p>
        <div className="mt-2 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <p className="mt-2 text-[10px] text-gray-600">
          Built with passion for fitness enthusiasts
        </p>
      </div>
    </footer>
  );
};

export default Footer;
