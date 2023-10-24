//import React from 'react'
import './intro.css'
import alan from '../../assets/Alan-image.png'
import {Link} from 'react-scroll'
import contact from '../../assets/contact.png'
import portfolio from '../../assets/portfolio.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hola">Hola,</span>
            <span className="introText">soy <span className="introName">Alan</span><br /> Frontend Developer</span>
            <p className="introPara">Soy un apasionado del desarrollo web, <br/>siempre en búsqueda de inspiración creativa y ansioso por adquirir nuevos conocimientos.<br/> Cada proyecto es un nuevo desafío que me entusiasma abordar. <br/>Siempre estoy aprendiendo y explorando nuevas formas de mejorar mis habilidades. <br/>¿Listo para crear algo increíble juntos?</p>
            <div className="buttonsIntro">
                <Link to='google.com'><button className="introBtn"><img src={portfolio} alt="CV" className="imgBtn" />Ver CV</button></Link>
                <Link to='google.com'><button className="introBtn"><img src={contact} alt="Contacto" className="imgBtn" />Contacto</button></Link>
            </div>
        </div>
        <img src={alan} alt="Alan-background" className="bg" />
    </section>
  )
}

export default Intro

