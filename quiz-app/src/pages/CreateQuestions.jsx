import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import "../style/CreateQuestions.css"
import ReturnPage from '../componentes/ReturnPage'
import CreateButton from '../componentes/CreateButton'




const CreateQuestions = () => {
    const [lastIdAndName, setLastIdAndName] = useState(null);

    
    const [formValues, setFormValues] = useState({
        question: '',
        answer: ''
      })
    
    
    const getInformations = (event) => {
          setQuizValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        }
        

  useEffect(() => {
    fetchData(); 
  }, []); 

  // buscando qual é o nome do quiz atual na API
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:9000/quizzes');
      // Encontra o objeto com o maior ID na resposta da API
      const maxIdItem = res.data.reduce((prev, current) => (
        prev.id > current.id ? prev : current
      ));
      if (maxIdItem) {
        setLastIdAndName(maxIdItem.quizName);
        console.log(maxIdItem);
      }
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  const sendData = (event) => {
    event.preventDefault();
    
  }


  return (
    <div className="CreateQuestions" onSubmit={sendData}>
        <div>
             <Link to="/create_quiz">
              <ReturnPage quizName={lastIdAndName}/>
             </Link> 
        </div>
        <div className='form-question-container'>
          <form className='form-question'>
           <div className='form-add'>
              <label htmlFor="question">Pergunta</label>
              <textarea
                    className=''
                    name="question"
                    rows="5"
                    onChange={getInformations}
              ></textarea>
            </div>
            <div className='form-add'>
              <label htmlFor="answer">Resposta</label>
              <textarea
                    className=''
                    name="answer"
                    rows="5"
                    onChange={getInformations}
              ></textarea>
            </div>
            
            <CreateButton text="Adicionar"/> {/* button to add question and answer to database */}
          </form>
        </div>
    </div>
  )
}

export default CreateQuestions