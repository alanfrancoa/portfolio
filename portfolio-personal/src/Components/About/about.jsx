import { useContext } from 'react'
import './About.css'
import UIDesign from '../../assets/ui-design.png'
import UIDesignB from '../../assets/ui-design-b.png'
import webSiteDesign from '../../assets/website-design.png'
import webSiteDesignB from '../../assets/website-design-b.png'
import portfolio from '../../assets/portfolio.png'
import portfolioB from '../../assets/portfolio-b.png'
import ThemeContext from '../../context/themeContext'
import { useLanguage } from '../../context/languageContext'

const About = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useLanguage();
    
    return (
        <section className={`about ${theme}`}>
            <span className={`aboutMe ${theme}`}>{t('aboutTitle')}</span>
            <span className={`aboutMeText ${theme}`}>{t('aboutDescription')}</span>
            <div className="aboutMeBars">
                <div className={`aboutMeBar ${theme}`}>
                    {theme == 'dark' ? <img src={webSiteDesign} alt="Creatividad" className="aboutMeImg" /> : <img src={webSiteDesignB} alt="Creatividad" className="aboutMeImg" />}
                    <div className={`aboutMeBarText ${theme}`}>
                        <h2>{t('creativity')}</h2>
                        <p>{t('creativityDescription')}</p>
                    </div>
                </div>
                <div className={`aboutMeBar ${theme}`}>
                {theme == 'dark' ? <img src={UIDesign} alt="Comunicacion y enseñanza" className="aboutMeImg" /> : <img src={UIDesignB} alt="Comunicacion y enseñanza" className="aboutMeImg" />}
                    <div className={`aboutMeBarText ${theme}`}>
                        <h2>{t('communication')}</h2>
                        <p>{t('communicationDescription')}</p>
                    </div>
                </div>
                <div className={`aboutMeBar ${theme}`}>
                {theme == 'dark' ? <img src={portfolio} alt="Enfoque de usuario" className="aboutMeImg" /> : <img src={portfolioB} alt="Enfoque de usuario" className="aboutMeImg" />}
                    <div className={`aboutMeBarText ${theme}`}>
                        <h2>{t('userFocus')}</h2>
                        <p>{t('userFocusDescription')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About