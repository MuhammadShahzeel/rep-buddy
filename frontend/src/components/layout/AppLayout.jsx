import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-850 to-gray-900 text-gray-100 font-[Poppins] flex flex-col">

      <Navbar />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="mt-auto py-6 bg-gray-900/90 backdrop-blur-lg border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 hover:text-gray-400 transition-colors duration-300">
            © {new Date().getFullYear()} {' '}
            <span className="bg-gradient-to-r from-emerald-400/90 to-cyan-400/90 bg-clip-text text-transparent font-medium">
              Rep Buddy
            </span>
            . All rights reserved.
          </p>
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
          <p className="mt-4 text-xs text-gray-600">
            Built with passion for fitness enthusiasts
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;