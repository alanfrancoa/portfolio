import { useContext } from 'react'
import './Skills.css'
import SkillsProgressRing from '../ProgressRing/SkillsProgressRing.jsx'
import SkillModal from './SkillModal.jsx'
import Html from '../Skills/Icons/html-5.png'
import java from '../Skills/Icons/java.png'
import gitIcon from '../Skills/Icons/git-icon.png'
import javaScript from '../Skills/Icons/javascript.png'
import logoCSS from '../Skills/Icons/logo-css-3.png'
import nodeJs from '../Skills/Icons/nodejs.png'
import reactJs from '../Skills/Icons/react.png'
import php from '../Skills/Icons/php.png'
import net from '../Skills/Icons/net.png'
import sql from '../Skills/Icons/mysql.png'
import python from '../Skills/Icons/python.png'
import docker from '../Skills/Icons/docker.png'
import ThemeContext from '../../context/themeContext'
import { useLanguage } from '../../context/languageContext'

const skillsData = [
  {
    key: 'html',
    imageUrl: Html,
    progress: 80,
    color: 'violet',
  },
  {
    key: 'java',
    imageUrl: java,
    progress: 80,
    color: 'indigo',
  },
  {
    key: 'git',
    imageUrl: gitIcon,
    progress: 80,
    color: 'blue',
  },
  {
    key: 'javascript',
    imageUrl: javaScript,
    progress: 80,
    color: 'green',
  },
  {
    key: 'css',
    imageUrl: logoCSS,
    progress: 80,
    color: 'yellow',
  },
  {
    key: 'nodejs',
    imageUrl: nodeJs,
    progress: 80,
    color: 'orange',
  },
  {
    key: 'react',
    imageUrl: reactJs,
    progress: 80,
    color: 'red',
  },
  {
    key: 'php',
    imageUrl: php,
    progress: 80,
    color: '#800080',
  },
  {
    key: 'net',
    imageUrl: net,
    progress: 80,
    color: '#4B0082',
  },
  {
    key: 'sql',
    imageUrl: sql,
    progress: 80,
    color: '#DC143C',
  },
  {
    key: 'python',
    imageUrl: python,
    progress: 80,
    color: '#ebfc00ff',
  },
  {
    key: 'docker',
    imageUrl: docker,
    progress: 80,
    color: '#3200fcff',
  },
];

import { useState } from 'react';

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const [modalSkill, setModalSkill] = useState({ name: '', description: '' });

  // Traducciones para skills
  const skillTranslations = {
    html: {
      name: t('htmlName') || 'HTML',
      description: t('htmlDescription') || 'Lenguaje de marcado para la estructura de páginas web.'
    },
    java: {
      name: t('javaName') || 'Java',
      description: t('javaDescription') || 'Lenguaje de programación orientado a objetos, usado en aplicaciones empresariales.'
    },
    git: {
      name: t('gitName') || 'Git',
      description: t('gitDescription') || 'Sistema de control de versiones distribuido.'
    },
    javascript: {
      name: t('javascriptName') || 'JavaScript',
      description: t('javascriptDescription') || 'Lenguaje de programación para la web, permite interactividad.'
    },
    css: {
      name: t('cssName') || 'CSS',
      description: t('cssDescription') || 'Lenguaje de estilos para diseño y presentación web.'
    },
    nodejs: {
      name: t('nodejsName') || 'Node.js',
      description: t('nodejsDescription') || 'Entorno de ejecución para JavaScript en el servidor.'
    },
    react: {
      name: t('reactName') || 'React',
      description: t('reactDescription') || 'Librería para construir interfaces de usuario interactivas.'
    },
    php: {
      name: t('phpName') || 'PHP',
      description: t('phpDescription') || 'Lenguaje de programación para desarrollo web backend.'
    },
    net: {
      name: t('netName') || '.NET',
      description: t('netDescription') || 'Framework de Microsoft para aplicaciones multiplataforma.'
    },
    sql: {
      name: t('sqlName') || 'SQL',
      description: t('sqlDescription') || 'Lenguaje para gestión y consulta de bases de datos.'
    },
    python: {
      name: t('pythonName') || 'Python',
      description: t('pythonDescription') || 'Lenguaje de programación versátil y fácil de aprender.'
    },
    docker: {
      name: t('dockerName') || 'Docker',
      description: t('dockerDescription') || 'Plataforma para crear, desplegar y ejecutar contenedores.'
    },
  };

  const handleClick = (skill) => {
    const { key } = skill;
    setModalSkill({
      name: skillTranslations[key].name,
      description: skillTranslations[key].description
    });
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <section className={`skills ${theme}`}>
      <h2 className={`skills-title ${theme}`}>{t('skillsTitle')}</h2>
      <p className={`description ${theme}`}>{t('skillsDescription')}</p>
      <div className='skills-list'>
        {skillsData.map(skill => (
          <SkillsProgressRing
            key={skill.key}
            imageUrl={skill.imageUrl}
            progress={skill.progress}
            color={skill.color}
            onClick={() => handleClick(skill)}
          />
        ))}
      </div>
      <SkillModal
        open={modalOpen}
        name={modalSkill.name}
        description={modalSkill.description}
        onClose={handleClose}
        theme={theme}
      />
    </section>
  );
};

export default Skills;