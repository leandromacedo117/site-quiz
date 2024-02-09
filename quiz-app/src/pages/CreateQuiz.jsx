import React, { useState } from 'react'
import axios from 'axios';

import '../style/CreateQuiz.css'
import { GoArrowLeft } from "react-icons/go";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import CreateButton from '../componentes/CreateButton';
import ReturnPage from '../componentes/ReturnPage';



const CreateQuiz = () => {
  const [quizValues, setQuizValues] = useState({
    quizName: '',
    description: '',
    category: '',
    numberQuestion: 0,
    LastTimeDone: null ,
    DayToNextRetrieval: 0,
    quiz_json: '{}'
  })

  const getInformations = (event) => {
      setQuizValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }
    
    const sendData = (e) => { 
    // e.preventDefault();
    axios.post('http://localhost:9000/createquiz', quizValues)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    console.log(quizValues);

  }

  return (
    <div className="CreateQuiz">
        <div className="quiz-container" onSubmit={sendData}>
            <Link to = '/Create'>
                <ReturnPage/>
            </Link>
            <form method="" className='form-container'>
                <div className="quiz-form">
                    <label htmlFor="Perguta" className='name-function'>Nome do Quiz</label>
                    <input
                    type="text"
                    className='input-name'
                    name='quizName'
                    onChange={getInformations}/>
                </div>
                <div className="quiz-form">
                    <label htmlFor="Perguta" className='name-function'>Descrição</label>
                    <textarea
                    className='input-descri'
                    name="description"
                    rows="5"
                    onChange={getInformations}
                    ></textarea>
                </div>

                <p>Categorias</p>
            <div className="category-content">
                <div className="category"></div>
                <div>
                <select id='category' name='category' onChange={getInformations} > 
                        <option value="Exatas">Exatas</option>
                        <option value="Ciência Humanas">Ciência Humanas</option>
                        <option value="Ciências da Naturaza">Ciências da Natureza</option>
                        <option value="Programação">Programação</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
            </div>
            <Link to='/create/questions' onClick={sendData}>
                <CreateButton text='Criar Quiz'  />
            </Link>


            </form>
            
        </div>
    </div>
  )
  
}


export default CreateQuiz
