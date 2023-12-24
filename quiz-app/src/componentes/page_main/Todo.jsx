import { useState } from 'react';
import './css_main/Todo.css'
// import { IconName } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";







const Todo = () => {
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
    <div className="Todo">
      <div className="menu-todo">
        <ul >
          <li className="list-name button-list"  onClick={recentesOnclick} style={{backgroundColor: '#202020'}} ><p  className={recentes ? 'color-green' : ''}>Recente</p></li>
          <li className="list-name button-list" onClick={todosOnclick}  style={{backgroundColor: '#202020'}} ><p  className={todos ? 'color-green' : ''}>Todos</p></li>
          <li className="list-name button-list" onClick={revisaoOnclick}  style={{backgroundColor: '#202020'}}><p  className={revisao ? 'color-green' : ''}>Revisão</p></li>
        </ul>
      </div>
      <div className="list-todo">
        <div className="list-content-todo">
          <div className="banner-quiz">
            <HiAcademicCap  />
            <h3 className="name-quiz-h">Test</h3>
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
        <div className="list-content-todo">
          <div className="banner-quiz">
            <HiAcademicCap  />
            <h3 className="name-quiz-h">Test</h3>
          </div>
          <p>10</p>
        </div>
      </div>
    </div>
  )
}

export default Todo