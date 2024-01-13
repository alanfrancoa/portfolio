// navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import contact from '../../assets/contact.png';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">Home</Link>
        <Link to="/sobre-mi" className="desktopMenuListItem">Sobre mi</Link>
        <Link to="/proyectos" className="desktopMenuListItem">Proyectos</Link>
        <Link to="/skills" className="desktopMenuListItem">Skills</Link>
        {/* Botón de contacto en la versión de escritorio */}
        <Link to="/contacto" className="desktopMenuListItem">Contacto</Link>
      </div>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="mobileMenu">
        <button className="mobileMenuBtn" onClick={toggleMobileMenu}>
          <img src={contact} alt="" className="mobileMenuImg" /> Menu
        </button>

        {isMobileMenuOpen && (
          <div className="mobileMenuItems">
            <Link to="/" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/sobre-mi" onClick={toggleMobileMenu}>Sobre mi</Link>
            <Link to="/proyectos" onClick={toggleMobileMenu}>Proyectos</Link>
            <Link to="/skills" onClick={toggleMobileMenu}>Skills</Link>
            {/* Botón de contacto en la versión móvil */}
            <Link to="/contacto" onClick={toggleMobileMenu}>Contacto</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;