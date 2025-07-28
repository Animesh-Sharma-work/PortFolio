import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, CheckSquare } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import portfolio from "../assets/portfolio.png";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <img src={portfolio} alt="Portfolio Icon" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
              Portfolio Website
            </span>
          </Link>

          <nav className="flex items-center space-x-4 sm:space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 hidden sm:block ${
                isActive("/")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Home
            </Link>
            <Link
              to="/todos"
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                isActive("/todos")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Todos</span>
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
