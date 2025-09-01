// 10. Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext"; 
import { Sun, Moon, Menu, X, Home, Heart, Info, Mail } from "lucide-react";

function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/favorites', label: 'Favorites', icon: Heart },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`${
      theme === "dark" 
        ? "bg-gray-900/95 text-white border-gray-800" 
        : "bg-white/95 text-gray-800 border-gray-200"
    } backdrop-blur-sm shadow-2xl fixed top-0 left-0 w-full z-50 border-b transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 animate-slideIn">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              MarwadTech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 animate-slideIn ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${
                    isActive(item.path) ? 'text-white' : 'group-hover:scale-110'
                  }`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side: Theme Toggle + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="group p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-110 shadow-lg"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 animate-slideIn ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          } border-t`}>
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 animate-slideIn ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className={`w-5 h-5 ${
                      isActive(item.path) ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'
                    }`} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;