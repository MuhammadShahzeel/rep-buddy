import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom"; // Make sure you're using react-router
import { Mail, Lock } from "lucide-react"; // Import icons from lucide-react
const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { signup, isLoading, error } = useSignup();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData.email, formData.password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 sm:mt-10 max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
    >
      <h3 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6 pb-2 text-white">
        Sign Up
      </h3>

      <div className="space-y-4 sm:space-y-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
          />
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 sm:py-3.5 rounded-xl shadow-lg hover:shadow-emerald-400/20 transition-all text-sm sm:text-base"
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-3 sm:px-4 py-2 rounded-lg">
            {error}
          </div>
        )}
      </div>

      {/* 👇 Login link */}
      <p className="mt-6 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-emerald-400 hover:text-emerald-300 font-medium transition"
        >
          Log in
        </Link>
      </p>
    </form>
  );
};

export default Signup;
