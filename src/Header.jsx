import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; 

function Header({ title }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header-container ${theme}-theme`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;