import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UsersPage from './UsersPage';
import About from './About';
import Contact from './Contact';
import FavoritesPage from './FavoritesPage';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import Footer from './Footer';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;