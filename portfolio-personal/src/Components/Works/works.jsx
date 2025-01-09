import { useContext } from 'react'
import './works.css' 
import buscadorPeliculas from '../Works/Icons/buscador-peliculas.png'
import buscadorClima from '../Works/Icons/buscador-clima.png'
import conectaCuatro from '../Works/Icons/conecta-4.png'
import logoX from '../Works/Icons/logo-x.png'
import mouseFollower from '../Works/Icons/mouse-follower.png'
import taTeTi from '../Works/Icons/tateti.png'
import ImageWithTooltip from '../ToolTip/toolTip'
import ThemeContext from '../../context/themeContext'
import github from '../../assets/github.png'
import githubB from '../../assets/github-b.png'
import carrito from '../Works/Icons/carrito.png'
import tareas from '../Works/Icons/tareas.png'
import turneraApp from '../Works/Icons/turnera.png'
import veterinariaApp from '../Works/Icons/vet-app.png'
import universidadApp from '../Works/Icons/universidad.png'
import stockCompras from '../Works/Icons/stock-compra.png'

const Works = () => {
  const {theme} = useContext(ThemeContext)
  const handleClick = (url) => {
    window.open(url, '_blank');
  }
  return (
    <section className={`works ${theme}`}>
        <h2 className="worksTitle">Mis proyectos</h2>
        <span className="worksDesc">Haz click en las imagenes, para ver mas sobre los proyectos que hice.</span>
            <div className="worksImgs">
            <ImageWithTooltip imageUrl={turneraApp} title="Gestion de turnos (.NET)" gitRepo="https://github.com/alanfrancoa/TurneraWeb" webSite= "#" />
            <ImageWithTooltip imageUrl={veterinariaApp} title="Gestor de Veterinarias (.NET)" gitRepo="https://github.com/alanfrancoa/VeterinariaRepo" webSite= "#" />
            <ImageWithTooltip imageUrl={universidadApp} title="SIU Diaguita - Gestion Universitaria (PHP)" gitRepo="https://github.com/alanfrancoa/SUI-Diaguita" webSite= "#" />
            <ImageWithTooltip imageUrl={stockCompras} title="Ventas y control de Stock (Java)" gitRepo="https://github.com/alanfrancoa/carrito-tec-java" webSite= "#" />

            <ImageWithTooltip imageUrl={buscadorClima} title="Buscador de Clima (React)" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/11-aplicacion-clima" webSite= "https://buscador-clima-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={buscadorPeliculas} title="Buscador de Peliculas (React)" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/10-nuevo-buscador-peliculas" webSite= "https://buscador-peliculas-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={logoX} title="Componente de X (React)" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/00-hola-mundo" webSite= "https://comp-newx-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={taTeTi} title="Tres en raya (React)" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/02-tic-tac-toe" webSite= "https://tic-tac-toe-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={conectaCuatro} title="Conecta 4 (React)" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/04-cuatro-en-linea" webSite= "https://conecta-cuatro-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={mouseFollower} title="Seguidor de Cursor (React)" gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/03-mouse-follower" webSite= "https://mouse-cursor-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={carrito} title="Carrito de compras (React)" gitRepo="https://github.com/alanfrancoa/curso-react/tree/main/projects/70699" webSite= "https://proyecto-carrito-react.netlify.app/" />
            <ImageWithTooltip imageUrl={tareas} title="Organizador de tareas (MERN)" gitRepo="https://github.com/alanfrancoa/app-stack-MERN/" webSite= "#" />
            </div>
            <button className={`workBtn ${theme}`} onClick={() => handleClick('https://github.com/alanfrancoa')}>{theme == 'dark' ? <img src={github} alt="" className="imgBtn"/> : <img src={githubB} alt="" className="imgBtn"/> }Ver mas proyectos</button>
    </section>
  )
}

export default Works