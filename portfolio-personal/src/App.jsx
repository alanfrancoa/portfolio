import { useState } from 'react'
import NavBar from './Components/NavBar/navbar'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
     <NavBar />
      <h1>Portfolio</h1>
      <button onClick={handleClick}> {count}</button>
    </>
  )
}

export default App
