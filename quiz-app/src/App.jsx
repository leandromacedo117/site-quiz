import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Day from './componentes/page_main/day';
 import Todo from './componentes/page_main/Todo.jsx';
import Options from './componentes/page_main/Options';
import api from '../api';
import axios from 'axios';
import { HiAcademicCap } from "react-icons/hi";

function App() {

  
  const [dataFromApi, setDataFromApi] = useState([]);

  useEffect(() => {
    api.get('test')
      .then(res => {
        setDataFromApi(res.data); // Salvando os dados da API no estado local
      })
      .catch(error => {
        console.error("Houve um erro: " + error);
      });
  }, []);

  // const [colora, setColor] = useState('#202020');
  const listButton = document.querySelector('button-list')
  const [recentes, setRecentes] = useState(false)
  const [todos, setTodos] = useState(false)
  const [revisao, setRevisao] = useState(false)
  
  const recentesOnclick = () =>{
    setRecentes(!recentes)
    setTodos(false)
    setRevisao(false)
  }
  const todosOnclick = () =>{
    setTodos(!todos)
    setRecentes(false)
    setRevisao(false)
    
  }
  
  const revisaoOnclick = () =>{
    setRevisao(!revisao)
    setRecentes(false)
    setTodos(false)
    }


  return (
    <div className="App">
      <header className="time-day">
        <div className="container-day">
          <Day></Day>
        </div>
      </header>
      <main>
        <div className="todo">
        <div className="Todo">
      <div className="menu-todo">
        <ul >
          <li className="list-name button-list"  onClick={recentesOnclick} style={{backgroundColor: '#202020'}} ><p  className={recentes ? 'color-green' : ''}></p></li>
          <li className="list-name button-list" onClick={todosOnclick}  style={{backgroundColor: '#202020'}} ><p  className={todos ? 'color-green' : ''}>Todos</p></li>
          <li className="list-name button-list" onClick={revisaoOnclick}  style={{backgroundColor: '#202020'}}><p  className={revisao ? 'color-green' : ''}>Revisão</p></li>
        </ul>
      </div>
    {dataFromApi.map(item => (
     <div key={item.id}>
      <div className="list-todo">
        <div className="list-content-todo">
         
                
          <div className="banner-quiz">
            <HiAcademicCap  />
            <h3 className="name-quiz-h">
             <p>{item.quizName}</p>  
            </h3>
          </div>
          <p>10</p>
        </div>
        <div className="list-content-todo">
          <div className="banner-quiz">
            <HiAcademicCap  />
            <h3 className="name-quiz-h"><p>{item.quizName}</p></h3>
          </div>
          <p>10</p>
        </div>
        <div className="list-content-todo">
          <div className="banner-quiz">
            <HiAcademicCap  />
            <h3 className="name-quiz-h">Test</h3>
          </div>
          <p>10</p>
        </div>
      </div>
     </div> 
      ))}

    </div>
        </div>
      </main>
      <footer className='options'>
        <Options></Options>
      </footer>
      
    
    </div>
  )
}



export default App;
