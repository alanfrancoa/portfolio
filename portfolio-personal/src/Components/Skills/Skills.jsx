import './Skills.css'
import SkillsProgressRing from '../ProgressRing/SkillsProgressRing.jsx'
import React from 'react'
import microsoft from '../../assets/microsoft.png'

const Skills = () => {
  return (
    <section className='skills'>
        <h2 className='skills-title'>Skills</h2>
        <span className='skills-desc'>Aqui falta desc</span>
        <div className='skills-list'>
            <SkillsProgressRing imageUrl={microsoft} progress={100} color='yellow'/>
            <SkillsProgressRing imageUrl={microsoft} progress={100} color='blue'/>
            <SkillsProgressRing imageUrl={microsoft} progress={100} color='red'/>
            <SkillsProgressRing imageUrl={microsoft} progress={100} color='orange'/>
            <SkillsProgressRing imageUrl={microsoft} progress={100} color='green'/>
            <SkillsProgressRing imageUrl={microsoft} progress={100} color='purple'/>
        </div>
    </section>
  )
}

export default Skills