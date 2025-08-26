import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; 

function Header({ title }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header-container ${theme}-theme`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>{title}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

export default Header;