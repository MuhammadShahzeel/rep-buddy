import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FiLogIn, FiLogOut, FiUserPlus, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const baseButtonClasses =
    "flex items-center gap-2 px-4 py-2 rounded-lg shadow-md transition-all font-medium";

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 shadow-lg">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link to="/" className="hover:text-emerald-400 transition-colors">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-white">Rep</span>{" "}
            <span className="text-emerald-400">Buddy</span>
          </h1>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="flex items-center lg:hidden">
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          ref={menuRef}
          className={`
            flex-col lg:flex lg:flex-row items-center 
            space-y-3 lg:space-y-0 lg:space-x-3 
            absolute lg:relative left-0 right-0 top-full lg:top-auto 
            bg-gray-900/95 lg:bg-transparent p-6 lg:p-0 
            shadow-lg lg:shadow-none transition-all duration-200 ease-in-out
            ${isOpen ? "flex opacity-100 translate-y-0" : "hidden lg:flex opacity-100 translate-y-0"}
          `}
        >
          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className={`${baseButtonClasses} w-full lg:w-auto text-center justify-center lg:justify-start bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-400/20`}
              >
                <FiLogIn />
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className={`${baseButtonClasses} w-full lg:w-auto text-center justify-center lg:justify-start border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/40 text-emerald-400 hover:shadow-emerald-500/10`}
              >
                <FiUserPlus />
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-200 font-semibold px-4 py-2 bg-gray-800/60 rounded-full shadow-md">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className={`${baseButtonClasses} w-full lg:w-auto text-center justify-center lg:justify-start bg-red-600 hover:bg-red-500 text-white hover:shadow-red-400/20`}
              >
                <FiLogOut />
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
