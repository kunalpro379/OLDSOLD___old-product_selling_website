// Layout.js
import React from 'react';
import Header from '../../componants/ui_componants/header';
import Sidebar from '../../componants/ui_componants/sidebar';

const Layout = ({ children }) => {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-[#000000] via-[#001834] to-[#008b6d]">
      <Header />

      <div className="flex flex-1 h-[calc(100vh-5rem)] overflow-hidden">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <button className="group relative">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-xl hover:shadow-cyan-500/50 transition-all duration-500 flex items-center justify-center cursor-pointer transform group-hover:scale-110">
            <svg
              className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-125"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute inset-0">
            <div className="absolute inset-0 animate-ping bg-cyan-400 opacity-20 rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Layout;