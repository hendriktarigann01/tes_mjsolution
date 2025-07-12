import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import axios from "axios";

const Header = ({ onMenuToggle, showSearch = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky z-40 top-0">
      <div className="flex justify-between items-center h-16 mx-4 md:mx-10">
        <div className="flex items-center space-x-2">
          <img src="/mjs-logo.png" alt="Logo" className="h-10" />
        </div>

        <div className="flex items-center space-x-6">
          {showSearch && (
            <div className="hidden md:flex max-w-md w-full">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-900" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
          )}

          {/* Mobile */}
          <button
            onClick={onMenuToggle}
            className="flex items-center space-x-2 border rounded-full px-3 py-1 shadow-sm md:hidden"
          >
            <span className="text-xl">&#9776;</span>
            <img
              src="/icon-profile.png"
              alt="User"
              className="w-6 h-6 rounded-full object-cover"
            />
          </button>

          {/* Desktop */}
          <div className="relative hidden md:flex items-center space-x-2">
            <img
              src="/icon-profile.png"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <ChevronDown className="text-gray-500 h-5 w-5" />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 top-12 bg-white shadow-md rounded-md border w-40 z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
