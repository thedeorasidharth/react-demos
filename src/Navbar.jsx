import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; 
import { CiDark } from "react-icons/ci";

function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"} shadow-md fixed top-0 left-0 w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold hover:opacity-80">
              MarwadTach
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="hover:opacity-70 transition">Home</Link>
            <Link to="/favorites" className="hover:opacity-70 transition">Favorites</Link>
            <Link to="/about" className="hover:opacity-70 transition">About</Link>
            <Link to="/contact" className="hover:opacity-70 transition">Contact</Link>
          </div>

          {/* Right: Theme Toggle */}
          <div>
            <CiDark 
              className="w-8 h-8 cursor-pointer hover:opacity-70 transition" 
              onClick={toggleTheme} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
