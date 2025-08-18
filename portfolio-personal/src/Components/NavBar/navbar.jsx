import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import menuB from '../../assets/menu-b.png';
import logoB from '../../assets/logo-b.png';
import ThemeContext from '../../context/themeContext';
import { useLanguage } from '../../context/languageContext';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLanguage } from "react-icons/md";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className={`navbar ${theme}`}>
      {theme == 'dark' ? <img src={logo} alt="" /> : <img src={logoB} alt="" /> }
  
      <div className="desktopMenu">
        <Link to="/" className={`desktopMenuListItem ${theme}`}>{t('home')}</Link>
        <Link to="/sobre-mi" className={`desktopMenuListItem ${theme}`}>{t('aboutMe')}</Link>
        <Link to="/proyectos" className={`desktopMenuListItem ${theme}`}>{t('projects')}</Link>
        <Link to="/skills" className={`desktopMenuListItem ${theme}`}>{t('skills')}</Link>
        <Link to="/contacto" className={`desktopMenuListItem ${theme}`}>{t('contact')}</Link>
      </div>

      <div className="navbar-controls">
        {/* Botón para cambiar el idioma */}
        <button onClick={toggleLanguage} className={`toogleLanguage ${theme}`}>
          <MdLanguage className='imgBtn' />
          {language === 'es' ? t('english') : t('spanish')}
        </button>

        {/* Botón para cambiar el tema */}
        <button onClick={toggleTheme} className={`toogleTheme ${theme}`}>
        {theme == 'dark' ? <MdOutlineLightMode style={{ color: 'white' }} className='imgBtn' /> : <MdDarkMode className='imgBtn'/>  }
        {theme == 'dark' ? t('lightMode') : t('darkMode') }
        </button>
      </div>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="mobileMenu">
        <button className={`mobileMenuBtn ${theme}`} onClick={toggleMobileMenu}>
        {theme == 'dark' ? <img src={menu} alt="" className="mobileMenuImg"/> : <img src={menuB} alt="" className="mobileMenuImg"/> } {t('menu')}
        </button>

        {isMobileMenuOpen && (
          <div className={`mobileMenuItems ${theme}`}>
            <Link to="/" onClick={toggleMobileMenu} className={theme}>{t('home')}</Link>
            <Link to="/sobre-mi" onClick={toggleMobileMenu} className={theme}>{t('aboutMe')}</Link>
            <Link to="/proyectos" onClick={toggleMobileMenu} className={theme}>{t('projects')}</Link>
            <Link to="/skills" onClick={toggleMobileMenu} className={theme}>{t('skills')}</Link>
            <Link to="/contacto" onClick={toggleMobileMenu} className={theme}>{t('contact')}</Link>
            
            {/* Controles de idioma y tema en móvil */}
            <div className="mobile-controls">
              <button onClick={toggleLanguage} className={`toogleLanguage ${theme} mobile`}>
                <MdLanguage className='imgBtn' />
                {language === 'es' ? t('english') : t('spanish')}
              </button>
              <button onClick={toggleTheme} className={`toogleTheme ${theme} mobile`}>
                {theme == 'dark' ? <MdOutlineLightMode style={{ color: 'white' }} className='imgBtn' /> : <MdDarkMode className='imgBtn'/>  }
                {theme == 'dark' ? t('lightMode') : t('darkMode') }
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
