import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const AppLayout = () => {
  const location = useLocation();
  const showFooter = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-850 to-gray-900 text-gray-100 font-[Poppins] flex flex-col">
      <Navbar />

      <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl">
        <Outlet />
      </main>

      {showFooter && <Footer />}
    </div>
  );
};

export default AppLayout;
