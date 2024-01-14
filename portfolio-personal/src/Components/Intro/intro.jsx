//import React from 'react'
import './intro.css'
import alan from '../../assets/Alan-image.png'
import portfolio from '../../assets/portfolio.png'

const Intro = () => {

  const handleClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <section id="intro">
        <div className="introContent">
            <span className="hola">Hola,</span>
            <span className="introText">soy <span className="introName">Alan</span><br /> Frontend Developer</span>
            <p className="introPara">Soy un apasionado del desarrollo web, <br/>siempre en búsqueda de inspiración creativa y ansioso por adquirir nuevos conocimientos.<br/> Cada proyecto es un nuevo desafío que me entusiasma abordar. <br/>Siempre estoy aprendiendo y explorando nuevas formas de mejorar mis habilidades. <br/>¿Listo para crear algo increíble juntos?</p>
            <div className="buttonsIntro">
                <button className="introBtn" onClick={() => handleClick('https://drive.google.com/file/d/1TO6UBT9DeoZvWz7b1pFDi8YvkrmwY0tb/view?usp=sharing')}><img src={portfolio} alt="CV" className="imgBtn" />Ver CV</button>
            </div>
        </div>
        <img src={alan} alt="Alan-background" className="bg" />
    </section>
  )
}

export default Intro

