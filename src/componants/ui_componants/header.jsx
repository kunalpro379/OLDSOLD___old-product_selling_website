// Header.js
import React from 'react';
import { BellIcon, UserIcon } from '@heroicons/react/24/solid';
import logo from '../../assets/Images/logo/logo.png';

const Header = () => {
  return (
    <header className="w-full h-37 bg-gradient-to-r from-black via-[#001834] to-[#00a2b4] border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Search */}
          <div className="flex items-center space-x-8">
            {/* Logo Group */}
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Loopify"
                className="h-16 w-auto object-contain my-4 hover:opacity-90 transition-opacity duration-300"
              />
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300"></div>
            </div>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center bg-white/10 rounded-lg px-4 py-2 mx-1 space-x-2 border border-white/20">
              <svg
                className="w-5 h-5 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-white placeholder-white/60 w-64"
              />
            </div>
          </div>

          {/*  Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <nav className="flex items-center space-x-8">
              {['        ', '     ', '      ', '      ', '     '].map((item, i) => (
                <button
                  key={i}
                  className="px-6 py-2 text-white/90 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/*User Profile and Actions */}
          <div className="flex items-center space-x-6">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <BellIcon className="h-6 w-6 text-white" />
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-3 p-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                <UserIcon className="h-6 w-6 text-white" />
                <span className="hidden md:block text-white font-medium">Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;