// navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png'

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="left">
        <img src={logo} alt="" className="logo" />
      </div>

      <div className="right">
        <div className="desktopMenu">
          <Link to="/" className="desktopMenuListItem">Home</Link>
          <Link to="/sobre-mi" className="desktopMenuListItem">Sobre mi</Link>
          <Link to="/proyectos" className="desktopMenuListItem">Proyectos</Link>
          <Link to="/skills" className="desktopMenuListItem">Skills</Link>
          <Link to="/contacto" className="desktopMenuListItem">Contacto</Link>
        </div>

        {/* Menú hamburguesa para dispositivos móviles */}
        <div className="mobileMenu">
          <button className="mobileMenuBtn" onClick={toggleMobileMenu}>
            <img src={menu} alt="" className="mobileMenuImg" /> Menu
          </button>

          {isMobileMenuOpen && (
            <div className="mobileMenuItems">
              <Link to="/" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/sobre-mi" onClick={toggleMobileMenu}>Sobre mi</Link>
              <Link to="/proyectos" onClick={toggleMobileMenu}>Proyectos</Link>
              <Link to="/skills" onClick={toggleMobileMenu}>Skills</Link>
              <Link to="/contacto" onClick={toggleMobileMenu}>Contacto</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar