//import { useState } from 'react'
import NavBar from './Components/NavBar/navbar'
import Intro from './Components/Intro/intro'
import About from './Components/About/about'
import Works from './Components/Works/works'
import SkillsProgressRing from './Components/Skills/SkillsProgressRing'
import adobe from './assets/adobe.png'

function App() {
 return (
    <>
     <NavBar />
     <Intro />
     <About />
     <Works />
     <SkillsProgressRing imageUrl={adobe} progress={45} color='#875443'/>
    </>
  )
}

export default App
