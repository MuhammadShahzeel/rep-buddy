import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link
            to="/login"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-emerald-400/20 transition-all font-medium"
          >
            Login
          </Link>
       <Link
  to="/signup"
  className="text-emerald-400 border border-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-500/10 transition-all font-medium"
>
  Signup
</Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
