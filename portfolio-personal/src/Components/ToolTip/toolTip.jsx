import { useState } from 'react'
import PropTypes from 'prop-types'
import './tooltip.css'
import gitHub from "../../assets/github.png"
import imageLink from "../../assets/link.png"


function ImageWithTooltip({ imageUrl, title, gitRepo, webSite }) {
  const [showTitle, setShowTitle] = useState(false)

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div
      className="image-container"
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
    >
      <img src={imageUrl} alt="Imagen" />
      {showTitle && <div className="tooltip"> 
            <h3 className="repoImageTitle">{title}</h3>
            <button className='buttonRepo' onClick={() => handleClick(webSite)}><img src={imageLink} alt="" /> Ir al sitio</button>
            <button className='buttonRepo' onClick={() => handleClick(gitRepo)}><img src={gitHub} alt="" /> Ver codigo</button></div>}
    </div>
  );
}
ImageWithTooltip.propTypes = {
    imageUrl: PropTypes.string.isRequired, // URL de la imagen
    title: PropTypes.string.isRequired,
    gitRepo: PropTypes.string.isRequired,
    webSite: PropTypes.string.isRequired, 
  };
export default ImageWithTooltip;
