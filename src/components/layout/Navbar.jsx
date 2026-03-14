import { Search, Bell, Moon, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 px-4 sm:px-6 py-4 border-b border-gray-700 shadow-sm gap-3 sm:gap-0">
      {/* Search */}
      <div className="flex items-center bg-gray-700 px-3 py-2 rounded-lg w-full sm:w-80">
        <Search size={18} className="text-gray-300" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 w-full text-sm text-white placeholder-gray-400"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 sm:gap-6 relative">
        {/* Dark Mode Button */}
        <button className="p-2 rounded-full hover:bg-gray-700 transition text-gray-300 hover:text-white">
          <Moon size={20} />
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-gray-700 transition text-gray-300 hover:text-white">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
            3
          </span>
        </button>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-lg transition text-gray-300 hover:text-white"
          >
            <User size={20} />
            <span className="font-medium text-sm hidden sm:block">Admin</span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-2">
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-700 rounded text-gray-300 hover:text-white">
                Profile
              </button>
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-700 rounded text-gray-300 hover:text-white">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
