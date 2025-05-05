import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-semibold text-emerald-400 hover:text-emerald-300 transition duration-200">
            Rep Buddy
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
