import { useRef, useState } from 'react';
import './css_main/Todo.css'
import { HiAcademicCap } from "react-icons/hi";
import API from './api/api';


const Todo = () => {
  const dataFromApi = API()

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

    const ref = useRef()
  
  return (
    <div className="Todo">
      <div className="menu-todo">
        <ul >
          <li className="list-name button-list"  onClick={recentesOnclick} style={{backgroundColor: '#202020'}} ><p  className={recentes ? 'color-green' : ''}>Recentes</p></li>
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
              <p>{item.numberQuestion}</p>
            </div>

            
          
          </div>
        </div> 
      ))}
      
    </div>
  )
}

export default Todo