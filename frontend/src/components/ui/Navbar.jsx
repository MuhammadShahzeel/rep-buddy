import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
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

        <div className="flex items-center space-x-3">
          {!user && (
            <>
              <Link
                to="/login"
                className={`${baseButtonClasses} bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-400/20`}
              >
                <FiLogIn />
                Login
              </Link>
              <Link
                to="/signup"
                className={`${baseButtonClasses} border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/40 text-emerald-400 hover:shadow-emerald-500/10`}
              >
                <FiUserPlus />
                Signup
              </Link>
            </>
          )}

          {user && (
            <>
              <span className="text-sm text-gray-300 font-medium px-2">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className={`${baseButtonClasses} border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40 text-red-500 hover:shadow-red-500/10`}
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
