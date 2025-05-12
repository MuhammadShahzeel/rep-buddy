import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
    >
      <h3 className="text-2xl font-extrabold mb-6 pb-2 text-white">Log In</h3>

      <div className="space-y-6">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-emerald-400/20 transition-all"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
