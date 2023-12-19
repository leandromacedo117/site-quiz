import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Day from './componentes/day'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="time-day">
        <Day></Day>
      </div>
    </div>
  )
}

export default App
