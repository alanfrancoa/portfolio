
import PropTypes from 'prop-types';
import './Skills.css';
import { useLanguage } from '../../context/languageContext';

const SkillModal = ({ open, name, description, onClose, theme }) => {
  const { t } = useLanguage();
  if (!open) return null;
  return (
    <div className="skill-modal-overlay" onClick={onClose}>
      <div className={`skill-modal ${theme}`} onClick={e => e.stopPropagation()}>
        <h3>{name}</h3>
        <p>{description}</p>
        <button className={theme} onClick={onClose}>{t('closeButton') || 'Cerrar'}</button>
      </div>
    </div>
  );
};

SkillModal.propTypes = {
  open: PropTypes.bool.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

export default SkillModal;
