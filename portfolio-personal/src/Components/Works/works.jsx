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
import { useLanguage } from '../../context/languageContext'
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
  const { t } = useLanguage()
  
  const handleClick = (url) => {
    window.open(url, '_blank');
  }
  
  return (
    <section className={`works ${theme}`}>
        <h2 className="worksTitle">{t('worksTitle')}</h2>
        <span className="worksDesc">{t('worksDescription')}</span>
            <div className="worksImgs">
            <ImageWithTooltip imageUrl={turneraApp} title={t('turneraApp')} gitRepo="https://github.com/alanfrancoa/TurneraWeb" webSite= "#" />
            <ImageWithTooltip imageUrl={veterinariaApp} title={t('veterinariaApp')} gitRepo="https://github.com/alanfrancoa/VeterinariaRepo" webSite= "#" />
            <ImageWithTooltip imageUrl={universidadApp} title={t('universidadApp')} gitRepo="https://github.com/alanfrancoa/SUI-Diaguita" webSite= "#" />
            <ImageWithTooltip imageUrl={stockCompras} title={t('stockCompras')} gitRepo="https://github.com/alanfrancoa/carrito-tec-java" webSite= "#" />

            <ImageWithTooltip imageUrl={buscadorClima} title={t('buscadorClima')} gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/11-aplicacion-clima" webSite= "https://buscador-clima-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={buscadorPeliculas} title={t('buscadorPeliculas')} gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/10-nuevo-buscador-peliculas" webSite= "https://buscador-peliculas-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={logoX} title={t('logoX')} gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/00-hola-mundo" webSite= "https://comp-newx-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={taTeTi} title={t('taTeTi')} gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/02-tic-tac-toe" webSite= "https://tic-tac-toe-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={conectaCuatro} title={t('conectaCuatro')} gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/04-cuatro-en-linea" webSite= "https://conecta-cuatro-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={mouseFollower} title={t('mouseFollower')} gitRepo="https://github.com/alanfrancoa/practica-react/tree/main/projects/03-mouse-follower" webSite= "https://mouse-cursor-alanfrancoa.netlify.app" />
            <ImageWithTooltip imageUrl={carrito} title={t('carrito')} gitRepo="https://github.com/alanfrancoa/curso-react/tree/main/projects/70699" webSite= "https://proyecto-carrito-react.netlify.app/" />
            <ImageWithTooltip imageUrl={tareas} title={t('tareas')} gitRepo="https://github.com/alanfrancoa/app-stack-MERN/" webSite= "#" />
            </div>
            <button className={`workBtn ${theme}`} onClick={() => handleClick('https://github.com/alanfrancoa')}>{theme == 'dark' ? <img src={github} alt="" className="imgBtn"/> : <img src={githubB} alt="" className="imgBtn"/> }{t('worksButton')}</button>
    </section>
  )
}

export default Works