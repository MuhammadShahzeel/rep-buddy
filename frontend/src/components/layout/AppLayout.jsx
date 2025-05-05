import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-gray-100 font-[Poppins]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
