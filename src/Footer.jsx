import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`py-4 text-center shadow-inner fixed bottom-0 left-0 w-full z-40
      ${theme === "dark" 
        ? "bg-gray-900 text-gray-300 border-t border-gray-900" 
        : "bg-white text-gray-600 border-t border-gray-200"}`}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Welcome to <span className="font-semibold">MarwadTech</span>
      </p>
    </footer>
  );
}

export default Footer;
