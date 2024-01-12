//import React from 'react'
import './works.css' 
import buscadorPeliculas from '../Works/Icons/buscador-peliculas.png'
import buscadorClima from '../Works/Icons/buscador-clima.png'
import conectaCuatro from '../Works/Icons/conecta-4.png'
import logoX from '../Works/Icons/logo-x.png'
import mouseFollower from '../Works/Icons/mouse-follower.png'
import taTeTi from '../Works/Icons/tateti.png'
import ImageWithTooltip from '../ToolTip/toolTip'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">Mi portfolio</h2>
        <span className="worksDesc">Haz click en las imagenes, para ver mas sobre los proyectos que hice.</span>
            <div className="worksImgs">
            <ImageWithTooltip imageUrl={buscadorClima} title="Buscador de Clima" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/11-aplicacion-clima" webSite= "https://buscador-clima-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={buscadorPeliculas} title="Buscador de Peliculas" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/10-nuevo-buscador-peliculas" webSite= "https://buscador-peliculas-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={logoX} title="Componente de X" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/00-hola-mundo" webSite= "https://comp-newx-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={taTeTi} title="Tres en raya" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/02-tic-tac-toe" webSite= "https://tic-tac-toe-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={conectaCuatro} title="Conecta 4" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/04-cuatro-en-linea" webSite= "https://conecta-cuatro-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={mouseFollower} title="Seguidor de Cursor" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/03-mouse-follower" webSite= "https://mouse-cursor-alanfrancoa.netlify.app" />
            </div>
            <button className="workBtn">Ver más</button>
    </section>
  )
}

export default Works