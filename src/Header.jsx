import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; 

function Header({ title }) {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#333' }}>
      <h1>{title}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

export default Header;