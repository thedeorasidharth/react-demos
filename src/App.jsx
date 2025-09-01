// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersPage from './UsersPage';
import About from './About';
import Contact from './Contact';
import FavoritesPage from './FavoritesPage';
import './App.css';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Footer from './Footer';
import Navbar from './Navbar';
import { useContext } from 'react';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col min-h-screen transition-all duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
          : "bg-gradient-to-br from-white via-slate-100 to-white"
      }`}
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content with smooth transitions */}
      <main className="flex-1 pt-20 pb-20 relative overflow-hidden">
        {/* Background decoration (colors depend on theme) */}
        <div className="absolute inset-0 opacity-30">
          {theme === "dark" ? (
            <>
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-4000"></div>
            </>
          ) : (
            <>
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-soft-light filter blur-xl animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-soft-light filter blur-xl animate-blob animation-delay-4000"></div>
            </>
          )}
        </div>

        {/* Main routes */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
