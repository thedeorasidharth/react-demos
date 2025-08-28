import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer-container ${theme}-theme`} style={{ padding: '10px 20px', textAlign: 'center', marginTop: 'auto' }}>
      <p>&copy; {new Date().getFullYear()} Welcome to MarwadTech</p>
    </footer>
  );
}

export default Footer;