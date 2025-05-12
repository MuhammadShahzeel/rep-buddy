import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };

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
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-emerald-400/20 transition-all font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="p-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-emerald-500/10 text-emerald-400 font-medium"
              >
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
                className="p-2 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-red-500/10 text-red-500 font-medium"
              >
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
