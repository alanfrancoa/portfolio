import { useContext } from 'react'
import './Skills.css'
import SkillsProgressRing from '../ProgressRing/SkillsProgressRing.jsx'
import React from 'react'
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
import ThemeContext from '../../context/themeContext'

const Skills = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <section className={`skills ${theme}`}>
      <h2 className={`skills-title ${theme}`}>Skills</h2>
      <p className={`description ${theme}`}>
        Los años de estudio me han brindado variados conocimientos, aquí te muestro algunas de mis habilidades clave.
        Cada barra de progreso representa mi nivel de conocimiento en dicha tecnología.
      </p>
      <div className='skills-list'>
        <SkillsProgressRing imageUrl={Html} progress={80} color='violet' />
        <SkillsProgressRing imageUrl={java} progress={80} color='indigo' />
        <SkillsProgressRing imageUrl={gitIcon} progress={80} color='blue' />
        <SkillsProgressRing imageUrl={javaScript} progress={80} color='green' />
        <SkillsProgressRing imageUrl={logoCSS} progress={80} color='yellow' />
        <SkillsProgressRing imageUrl={nodeJs} progress={80} color='orange' />
        <SkillsProgressRing imageUrl={reactJs} progress={80} color='red' />
        <SkillsProgressRing imageUrl={php} progress={80} color='#800080' />
        <SkillsProgressRing imageUrl={net} progress={80} color='#4B0082' />
        <SkillsProgressRing imageUrl={sql} progress={80} color='#DC143C' />
      </div>
    </section>
  )
}

export default Skills