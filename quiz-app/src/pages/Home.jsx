import '../App.css';
import Todo from '../componentes/Todo';
import Day from '../componentes/day'

function Home() {
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
    </div>
  )
}



export default Home;
