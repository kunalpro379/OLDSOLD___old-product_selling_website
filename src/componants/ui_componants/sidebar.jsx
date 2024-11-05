// Sidebar.js
import React from 'react';
import { HomeIcon, RocketLaunchIcon, ShoppingCartIcon, ChatBubbleLeftIcon, BellIcon, UserIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-20 border-r border-white/10 bg-black/20">
      <div className="py-8 px-2">
        <nav className="space-y-6">
          {[HomeIcon, RocketLaunchIcon, ShoppingCartIcon, ChatBubbleLeftIcon, BellIcon, UserIcon].map((Icon, i) => (
            <button
              key={i}
              className="w-full p-3 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <Icon className="h-6 w-6 text-white" />
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;