import './App.css';
import Day from './componentes/Day'
import Todo from './componentes/Todo';
import Options from './componentes/Options';

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
