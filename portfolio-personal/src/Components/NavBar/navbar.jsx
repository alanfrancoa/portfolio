//import React from 'react'
import {Link} from 'react-scroll'

import './navbar.css'
//import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'

const NavBar = () => {
  return (
    <nav className='navbar'>
      
      <div className="desktopMenu">
        <Link to='https://www.google.com' className="desktopMenuListItem">Home</Link>
        <Link to='https://www.google.com' className="desktopMenuListItem">Sobre mi</Link>
        <Link to='https://www.google.com' className="desktopMenuListItem">Proyectos</Link>
        <Link to='https://www.google.com' className="desktopMenuListItem">Skills</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={contact} alt='' className='desktopMenuImg' /> Contacto
      </button>
    </nav>
  )
}

export default NavBar