import { useState } from 'react'
import PropTypes from 'prop-types'
import './tooltip.css'
import gitHub from "../../assets/github.png"
import imageLink from "../../assets/link.png"


function ImageWithTooltip({ imageUrl, title }) {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div
      className="image-container"
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
    >
      <img src={imageUrl} alt="Imagen" />
      {showTitle && <div className="tooltip"> 
            <h3 className="repoImageTitle">{title}</h3>
            <button className='buttonRepo'><img src={imageLink} alt="" /> Ir al sitio</button>
            <button className='buttonRepo'><img src={gitHub} alt="" /> Ver codigo</button></div>}
    </div>
  );
}
ImageWithTooltip.propTypes = {
    imageUrl: PropTypes.string.isRequired, // URL de la imagen
    title: PropTypes.string.isRequired, // Título de la imagen
  };
export default ImageWithTooltip;
