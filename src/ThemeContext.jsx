import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    // Add/remove dark class on <html>
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Save preference
    localStorage.setItem("theme", theme);

    // Update meta color for mobile browsers
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        theme === "dark" ? "#111827" : "#ffffff"
      );
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Wrap children with theme-aware background + text */}
      <div className={`min-h-screen transition-colors duration-500 
        ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
