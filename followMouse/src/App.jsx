import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [position, setPosition] = useState({x:0 , y:0})
  
  useEffect(() => {
    const changePosition = (e) => {
      const newPosition = {x: e.clientX, y: e.clientY}
      setPosition(newPosition)
    }

    window.addEventListener("mousemove", changePosition)

    return () =>{
      window.removeEventListener("mousemove", changePosition)
    }
  })

  return (
    <>
      <div id='circle' style={{
        position: "relative",
        width: 50,
        height: 50,
        border: "1px solid white",
        borderRadius: 25,
        top: -20,
        left: -20,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
    </>
  )
}
export default App
