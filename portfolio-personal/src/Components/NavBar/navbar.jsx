import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import menuB from '../../assets/menu-b.png';
import logoB from '../../assets/logo-b.png';
import ThemeContext from '../../context/themeContext';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); 

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className={`navbar ${theme}`}>
      {theme == 'dark' ? <img src={logo} alt="" /> : <img src={logoB} alt="" /> }
  
      <div className="desktopMenu">
        <Link to="/" className={`desktopMenuListItem ${theme}`}>Home</Link>
        <Link to="/sobre-mi" className={`desktopMenuListItem ${theme}`}>Sobre mi</Link>
        <Link to="/proyectos" className={`desktopMenuListItem ${theme}`}>Proyectos</Link>
        <Link to="/skills" className={`desktopMenuListItem ${theme}`}>Skills</Link>
        <Link to="/contacto" className={`desktopMenuListItem ${theme}`}>Contacto</Link>
      </div>

      {/* Botón para cambiar el tema */}
      <button onClick={toggleTheme} className={`toogleTheme ${theme}`}>
      {theme == 'dark' ? <MdOutlineLightMode style={{ color: 'white' }} className='imgBtn' /> : <MdDarkMode className='imgBtn'/>  }
      {theme == 'dark' ? 'Modo claro' : 'Modo oscuro' }
      </button>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="mobileMenu">
        <button className={`mobileMenuBtn ${theme}`} onClick={toggleMobileMenu}>
        {theme == 'dark' ? <img src={menu} alt="" className="mobileMenuImg"/> : <img src={menuB} alt="" className="mobileMenuImg"/> } Menu
        </button>

        {isMobileMenuOpen && (
          <div className={`mobileMenuItems ${theme}`}>
            <Link to="/" onClick={toggleMobileMenu} className={theme}>Home</Link>
            <Link to="/sobre-mi" onClick={toggleMobileMenu} className={theme}>Sobre mi</Link>
            <Link to="/proyectos" onClick={toggleMobileMenu} className={theme}>Proyectos</Link>
            <Link to="/skills" onClick={toggleMobileMenu} className={theme}>Skills</Link>
            <Link to="/contacto" onClick={toggleMobileMenu} className={theme}>Contacto</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
