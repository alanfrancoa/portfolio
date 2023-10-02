//import React from 'react'
import './about.css'
import UIDesign from '../../assets/ui-design.png'
import webSiteDesign from '../../assets/website-design.png'
import portfolio from '../../assets/portfolio.png'
const About = () => {
  return (
    <section id="about">
        <span className="aboutMe">Sobre mí</span>
        <span className="aboutMeText">Con una trayectoria diversa que abarca tanto la industria de la belleza como la educación, he forjado un perfil único en el mundo del desarrollo web. Mis años de experiencia en belleza han afinado mi sentido del color y el diseño, brindándome una perspectiva creativa distintiva. Además, mi experiencia como docente me ha dotado de habilidades sólidas en la transmisión efectiva del conocimiento. Complementando esta experiencia, mi formación en historia ha enriquecido mi capacidad de comprensión lectora y análisis crítico. Ahora, como desarrollador web, fusiono estas habilidades para crear las mas diversas paginas web.</span>
        <div className="aboutMeBars">
            <div className="aboutMeBar">
                <img src={webSiteDesign} alt="Creatividad" className="aboutMeImg" />
                <div className="aboutMeBarText">
                    <h2>Creatividad </h2>
                    <p>Mi experiencia en la industria de la belleza ha afinado mi sentido del diseño y el color, permitiéndome crear interfaces web visualmente atractivas y cautivadoras.</p>
                </div>
            </div>
            <div className="aboutMeBar">
                <img src={UIDesign} alt="Comunicacion y ensenanza" className="aboutMeImg" />
                <div className="aboutMeBarText">
                    <h2>Comunicación </h2>
                    <p>Como docente, he desarrollado habilidades sólidas para comunicar conceptos técnicos de manera clara y accesible, lo que facilita la colaboración y la comprensión en proyectos web, como tambien para poder divulgar el conocimiento.</p>
                </div>
            </div>
            <div className="aboutMeBar">
                <img src={portfolio} alt="Enfoque de usuario" className="aboutMeImg" />
                <div className="aboutMeBarText">
                    <h2>Enfoque en el Usuario</h2>
                    <p>Mi experiencia previa me ha enseñado la importancia de comprender las necesidades y expectativas del usuario. Esto me permite diseñar soluciones web centradas en el usuario, garantizando una experiencia intuitiva y satisfactoria.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About