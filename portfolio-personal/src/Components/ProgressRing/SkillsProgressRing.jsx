import PropTypes from 'prop-types'
import './SkillsProgressRing.css'

const ProgressRing = ({ imageUrl, progress, color, onClick }) => {
  const radius = 100;
  const strokeWidth = 20;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="progress-ring"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          className="ring-circle"
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset: offset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <image xlinkHref={imageUrl} x="50" y="50" height="100" width="100" />
      </svg>
    </div>
  )
}

ProgressRing.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default ProgressRing