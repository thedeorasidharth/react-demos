import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
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
        <Header title="Demo 10: Redux State Management" />
        <nav style={{ padding: '10px 20px', backgroundColor: '#444', color: '#fff' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
            <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/favorites" style={{ color: '#fff', textDecoration: 'none' }}>Favorites</Link></li>
            <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </nav>
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