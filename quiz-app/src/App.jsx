import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Day from './componentes/page_main/day'
import Todo from './componentes/page_main/Todo.jsx'
import Options from './componentes/page_main/Options'



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
      <main>
        <div className="todo">
        <Todo></Todo>
        </div>
      </main>
      <footer className='options'>
        <Options></Options>
      </footer>
    </div>
  )
}

export default App
