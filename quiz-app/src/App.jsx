import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Day from './componentes/day'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <!-- css of project -->
    
    <div className="App">
      
      <header className="time-day">
        <div className="container-day">
            <Day></Day>
        </div>
      </header>
    </div>
  )
}

export default App
