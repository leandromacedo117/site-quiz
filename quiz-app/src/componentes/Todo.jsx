import { useRef, useState } from 'react';
import '../style/Todo.css'
import API from '../data/api';
import Card from './Card.jsx';
import CreateButton from "./CreateButton.jsx"

const Todo = ( {isCreate} ) => {
  const dataFromApi = API()

  const [recentes, setRecentes] = useState(false)
  const [todos, setTodos] = useState(true)
  const [revisao, setRevisao] = useState(false)
  const [option, setOption] = useState("todos")
  
  const recentesOnclick = () =>{
    setRecentes(true)
    setTodos(false)
    setRevisao(false)
    setOption("recentes")
  }
  const todosOnclick = () =>{
    setTodos(true)
    setRecentes(false)
    setRevisao(false)
    setOption("todos")
  }
  
  const revisaoOnclick = () =>{
    setRevisao(true)
    setRecentes(false)
    setTodos(false)
    setOption("revisao")
    }

   
  
  return (
    <div className="Todo">
      <div className="menu-todo">
        <ul >
          <li className="list-name button-list"  onClick={recentesOnclick} style={{backgroundColor: '#202020'}} ><p  className={recentes ? 'color-green' : ''}>Recentes</p></li>
          <li className="list-name button-list" onClick={todosOnclick}  style={{backgroundColor: '#202020'}} ><p  className={todos ? 'color-green' : ''}>Todos</p></li>
          <li className="list-name button-list" onClick={revisaoOnclick}  style={{backgroundColor: '#202020'}}><p  className={revisao ? 'color-green' : ''}>Revisão</p></li>
        </ul>
      </div>
      <div>
        {
          isCreate ? ( <CreateButton/> ) : null
        }
      </div>
      {dataFromApi.map(item => (
        <div key={item.id}>
          <Card 
            item={item}
            option={option}
          />
        </div>
      ))}
      
    </div>
  )
}

export default Todo