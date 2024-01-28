import React, { useState } from 'react'
import axios from 'axios';

import '../style/CreateQuiz.css'
import { GoArrowLeft } from "react-icons/go";
import { HiPlus } from "react-icons/hi";

const CreateQuiz = () => {
  const [quizValues, setQuizValues] = useState({
    quizName: '',
    description: '',
    category: ''
  })

  const getInformations = (event) => {
      setQuizValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }
    
    const sendData = (e) => { 
    e.preventDefault();
    axios.post('http://localhost:9000/createquiz', quizValues)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    console.log(quizValues);

  }

  return (
    <div className="CreateQuiz">
        <div className="quiz-container" onSubmit={sendData}>
            <div className='quiz-icon'>
                <span>
                    <GoArrowLeft/>
                </span>
            </div>
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
            <div className='button-create-quiz'>
                <button className="button-create-quiz-div"  type='submit'>
                    <span>
                        <HiPlus/>
                    </span>
                    <h3>Criar Quiz</h3>
                </button>
            </div>

            </form>
            
        </div>
    </div>
  )
}

export default CreateQuiz
