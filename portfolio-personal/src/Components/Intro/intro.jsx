import  { useContext } from 'react';
import './intro.css'; // Importa la hoja de estilos
import alan from '../../assets/Alan-image.png';
import portfolio from '../../assets/portfolio.png';
import portfolioB from '../../assets/portfolio-b.png'
import linkedIn from '../../assets/linkedin.png'
import linkedInB from '../../assets/linkedin-b.png'
import ThemeContext from '../../context/themeContext'; // Importa el contexto de tema

const Intro = () => {
  const { theme } = useContext(ThemeContext); // Obtiene el tema desde el contexto

  const handleClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <section id="intro" className={`bground ${theme}`}> 
        <div className="introContent">
            <span className={`hola ${theme}`}>Hola,</span>
            <span className={`introText ${theme}`}>soy <span className={`introName ${theme}`}>Alan</span><br /> Frontend Developer</span>
            <p className={`introPara ${theme}`}>Soy un apasionado del desarrollo web, <br/>siempre en búsqueda de inspiración creativa y ansioso por adquirir nuevos conocimientos.<br/> Cada proyecto es un nuevo desafío que me entusiasma abordar. <br/>Siempre estoy aprendiendo y explorando nuevas formas de mejorar mis habilidades. <br/>¿Listo para crear algo increíble juntos?</p>
            <div className="buttonsIntro">
            <button className={`introBtn ${theme}`} onClick={() => handleClick('https://drive.google.com/file/d/1TO6UBT9DeoZvWz7b1pFDi8YvkrmwY0tb/view?usp=sharing')}>{theme == 'dark' ? <img src={portfolio} alt="" className="imgBtn"/> : <img src={portfolioB} alt="" className="imgBtn"/> }Ver mi CV</button>
            <button className={`introBtn ${theme}`} onClick={() => handleClick('https://www.linkedin.com/in/alan-alvarez-0b4644160/')}>{theme == 'dark' ? <img src={linkedIn} alt="" className="imgBtn"/> : <img src={linkedInB} alt="" className="imgBtn"/> }Ver mi LinkedIn</button>
            </div>
        </div>
        <img src={alan} alt="Alan-background" className="bg" />
    </section>
  )
}

export default Intro;

