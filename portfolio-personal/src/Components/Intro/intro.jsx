import  { useContext } from 'react';
import './intro.css'; // Importa la hoja de estilos
import alan from '../../assets/Alan-image.png';
import portfolio from '../../assets/portfolio.png';
import portfolioB from '../../assets/portfolio-b.png'
import linkedIn from '../../assets/linkedin.png'
import linkedInB from '../../assets/linkedin-b.png'
import ThemeContext from '../../context/themeContext'; // Importa el contexto de tema
import { useLanguage } from '../../context/languageContext';

const Intro = () => {
  const { theme } = useContext(ThemeContext); // Obtiene el tema desde el contexto
  const { t } = useLanguage(); // Obtiene la función de traducción

  const handleClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <section id="intro" className={`bground ${theme}`}> 
        <div className="introContent">
            <span className={`hola ${theme}`}>{t('hello')}</span>
            <span className={`introText ${theme}`}>{t('iAm')} <span className={`introName ${theme}`}>{t('name')}</span><br /> {t('profession')}</span>
            <p className={`introPara ${theme}`}>{t('introDescription')}</p>
            <div className="buttonsIntro">
            <button className={`introBtn ${theme}`} onClick={() => handleClick('https://drive.google.com/file/d/1mU7SJGJHrDts_Ihm-fTPxSHtnYenqBEp/view?usp=sharing')}>{theme == 'dark' ? <img src={portfolio} alt="" className="imgBtn"/> : <img src={portfolioB} alt="" className="imgBtn"/> }{t('viewCV')}</button>
            <button className={`introBtn ${theme}`} onClick={() => handleClick('https://www.linkedin.com/in/alan-f-alvarez/')}>{theme == 'dark' ? <img src={linkedIn} alt="" className="imgBtn"/> : <img src={linkedInB} alt="" className="imgBtn"/> }{t('viewLinkedIn')}</button>
            </div>
        </div>
        <img src={alan} alt="Alan-background" className="bg" />
    </section>
  )
}

export default Intro;

