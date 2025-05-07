import { Link } from 'react-router-dom';

const Navbar = () => {
 
  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 shadow-lg">
      <nav className=" mx-auto px-4 sm:px-6 lg:px-8 py-3  flex justify-between items-center">
        <Link to="/" className="hover:text-emerald-400 transition-colors">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-emerald-400">Rep</span> Buddy
          </h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
            Workouts
          </Link>
          <Link to="/profile" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors font-medium">
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
