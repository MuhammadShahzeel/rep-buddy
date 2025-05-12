import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-850 to-gray-900 text-gray-100 font-[Poppins] flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="mt-auto py-6 bg-gray-900/90 backdrop-blur-lg border-t border-gray-800">
      
      <Footer/>
      
      </footer>
    
    </div>
  );
};

export default AppLayout;
