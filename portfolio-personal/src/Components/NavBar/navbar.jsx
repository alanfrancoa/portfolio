// navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import contact from '../../assets/contact.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">Home</Link>
        <Link to="/sobre-mi" className="desktopMenuListItem">Sobre mi</Link>
        <Link to="/proyectos" className="desktopMenuListItem">Proyectos</Link>
        <Link to="/skills" className="desktopMenuListItem">Skills</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="" className="desktopMenuImg" /> Contacto
      </button>
    </nav>
  );
}

export default NavBar;
