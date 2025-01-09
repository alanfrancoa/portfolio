import { useContext } from 'react'
import './About.css'
import UIDesign from '../../assets/ui-design.png'
import UIDesignB from '../../assets/ui-design-b.png'
import webSiteDesign from '../../assets/website-design.png'
import webSiteDesignB from '../../assets/website-design-b.png'
import portfolio from '../../assets/portfolio.png'
import portfolioB from '../../assets/portfolio-b.png'
import ThemeContext from '../../context/themeContext'

const About = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className={`about ${theme}`}>
            <span className={`aboutMe ${theme}`}>Sobre mí</span>
            <span className={`aboutMeText ${theme}`}>Mi trayectoria ha sido diversa, habiendo transitado tanto la industria de la belleza como el mundo de la educación. A lo largo de los años, he adquirido una gran cantidad de experiencias que hoy enriquecen mi enfoque en el desarrollo de software. Mi paso por el sector de la belleza me permitió desarrollar una sensibilidad estética que ahora aplico al diseño de soluciones digitales. Como docente, aprendí la importancia de compartir conocimientos de manera clara, algo que valoro mucho en mi trabajo actual como desarrollador. Con una base en programación que he ido perfeccionando a lo largo del tiempo, decidí seguir mi verdadera pasión por el desarrollo de software, lo que me llevó a retomar mis estudios en programación. Hoy, como desarrollador, me esfuerzo por integrar creatividad, comunicación efectiva y un enfoque centrado en el usuario en cada proyecto que emprendo.</span>
            <div className="aboutMeBars">
                <div className={`aboutMeBar ${theme}`}>
                    {theme == 'dark' ? <img src={webSiteDesign} alt="Creatividad" className="aboutMeImg" /> : <img src={webSiteDesignB} alt="Creatividad" className="aboutMeImg" />}
                    <div className={`aboutMeBarText ${theme}`}>
                        <h2>Creatividad </h2>
                        <p>Mi experiencia en la industria de la belleza me brindó un sentido del diseño y la estética que ahora aplico en la creación de soluciones digitales, buscando siempre una combinación de funcionalidad y estética.</p>
                    </div>
                </div>
                <div className={`aboutMeBar ${theme}`}>
                {theme == 'dark' ? <img src={UIDesign} alt="Comunicacion y enseñanza" className="aboutMeImg" /> : <img src={UIDesignB} alt="Comunicacion y enseñanza" className="aboutMeImg" />}
                    <div className={`aboutMeBarText ${theme}`}>
                        <h2>Comunicación </h2>
                        <p>La enseñanza me permitió desarrollar habilidades para comunicarme de forma efectiva, una habilidad que traslado al desarrollo de software para poder compartir conocimientos y colaborar de manera clara en proyectos técnicos.</p>
                    </div>
                </div>
                <div className={`aboutMeBar ${theme}`}>
                {theme == 'dark' ? <img src={portfolio} alt="Enfoque de usuario" className="aboutMeImg" /> : <img src={portfolioB} alt="Enfoque de usuario" className="aboutMeImg" />}
                    <div className={`aboutMeBarText ${theme}`}>
                        <h2>Enfoque en el Usuario</h2>
                        <p>Mi paso por diferentes áreas me ha enseñado la importancia de escuchar y comprender las necesidades de los usuarios. Esto me permite diseñar soluciones de software que priorizan una experiencia fluida y centrada en el usuario.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About