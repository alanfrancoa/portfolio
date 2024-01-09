import PropTypes from 'prop-types'
import './SkillsProgressRing.css'

const ProgressRing = ({ imageUrl, progress, color }) => {
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-ring">
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
        <image xlinkHref={imageUrl} x="25" y="25" height="50" width="50" />
      </svg>
    </div>
  )
}

ProgressRing.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default ProgressRing