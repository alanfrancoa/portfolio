//import React from 'react'
import './works.css' 
import portfolio from '../../assets/portfolio.png'
import ImageWithTooltip from '../ToolTip/toolTip'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">Mi portfolio</h2>
        <span className="worksDesc">Aqui agregare texto.</span>
            <div className="worksImgs">
            <ImageWithTooltip imageUrl={portfolio} title="Tres en raya" gitRepo="https://google.com" webSite= "http://instagram.com" />
            </div>
            <button className="workBtn">Ver más</button>
    </section>
  )
}

export default Works