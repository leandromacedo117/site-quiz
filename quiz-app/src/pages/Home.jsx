import '../App.css';
import Todo from '../componentes/Todo';
import Day from '../componentes/day'
import useItervalReturn from '../hooks/useIntervalReturn';
// import UseloginAntentication from '../hooks/useloginAntentication';
function Home() {

  return (
    <div className="App">
      {/* <UseloginAntentication></UseloginAntentication> */}
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
