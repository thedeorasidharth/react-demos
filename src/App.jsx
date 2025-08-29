import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersPage from './UsersPage';
import About from './About';
import Contact from './Contact';
import FavoritesPage from './FavoritesPage';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import Footer from './Footer';
import Navbar from './Navbar';
import UserDetails from "./UserDetails";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          {/* Fixed Navbar */}
          <Navbar />

          {/* Main Content with padding for navbar/footer */}
          <main className="flex-1 pt-16 pb-16">
            <Routes>
              <Route path="/" element={<UsersPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/user/:email" element={<UserDetails />} />
            </Routes>
          </main>

          {/* Fixed Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
