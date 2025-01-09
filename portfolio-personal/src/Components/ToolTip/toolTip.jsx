import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import './tooltip.css'
import gitHub from "../../assets/github.png"
import imageLink from "../../assets/link.png"
import ThemeContext from '../../context/themeContext'

function ImageWithTooltip({ imageUrl, title, gitRepo, webSite }) {
  const [showTitle, setShowTitle] = useState(false)
  const { theme } = useContext(ThemeContext)

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
      {showTitle && <div className={`tooltip ${theme}`}>
        <h3 className="repoImageTitle">{title}</h3>
        {webSite !== "#" && (
          <button className={`buttonRepo ${theme}`} onClick={() => handleClick(webSite)}>
            <img src={imageLink} alt="" /> Ir al sitio
          </button>
        )}
        <button className={`buttonRepo ${theme}`} onClick={() => handleClick(gitRepo)}>
          <img src={gitHub} alt="" /> Ver código
        </button>
      </div>}
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
