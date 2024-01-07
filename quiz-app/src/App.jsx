import './App.css';
import Todo from './componentes/Todo';
import Options from './componentes/Options';
import Day from './componentes/day'

function App() {

  

  return (
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



export default App;
