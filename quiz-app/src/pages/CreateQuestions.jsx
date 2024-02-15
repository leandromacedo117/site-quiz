import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../style/CreateQuestions.css";
import ReturnPage from '../componentes/ReturnPage';
import CreateButton from '../componentes/CreateButton';

const CreateQuestions = () => {
    const [inputValue, setInputValue] = useState(true)
    const [finallyQuiz, setFinallyQuiz] = useState(false)
    const [lastName, setLastName] = useState(null);
    const [numberQuestions, setNumberQuestions] = useState({
        numberQuestion: 1
    })
    const [formValues, setFormValues] = useState({
        ids: 1, // Inicialize o ID como 1
        question: '',
        answer: '',
        LastTimeDone: '2024-07-28',
        DayToNextRetrieval: 0,
        nRetrieval: 3,
        lastName: null,
        lastId: null
    });

    const getInformations = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const getNumberQuestionValues = (event) => {
        // console.log(numberQuestions)
        event.preventDefault()
        if(formValues.question.trim() == '' || formValues.answer.trim() == ""){
            setInputValue(false)
        } 
        setNumberQuestions((prev) => ({ ...prev, numberQuestion : prev.numberQuestion -1 }))
        console.log(numberQuestions)
        console.log('aa')
        axios.post('http://localhost:9000/numberQuestion', numberQuestions)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
        
    }
    
    useEffect(() => {
        fetchData();
    }, []); 
    
    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:9000/quizzes');
            // const priId = res.data[0].id
            // console.log(priId)
            const maxIdItem = res.data.reduce((prev, current) => (
                prev.id > current.id ? prev : current
                ));
                if (maxIdItem) {
                    setLastName(maxIdItem.quizName);
                    setFormValues((prev) => ({ ...prev, lastName: maxIdItem.quizName}));
                    setFormValues((prev) => ({ ...prev, lastId: maxIdItem.id }));

                    // Defina o ID como o próximo número após o último ID retornado da API
                    // setFormValues((prev) => ({ ...prev, id: maxIdItem.id + 1 }));
                }
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }

        };
    
        const sendData = (event) => {
            event.preventDefault();

            if (formValues.question.trim() == "" || formValues.answer.trim() == ''){
                setInputValue(false)
            } else {
                axios.post('http://localhost:9000/question', (formValues))
                .then(res => console.log(res))
                .catch(err => console.log(err));
            
                // Incremente o ID para a próxima pergunta
                setFormValues((prev) => ({ ...prev, ids: prev.ids + 1 }));
                setNumberQuestions((prev) => ({ ...prev, numberQuestion : formValues.ids}))
                setFinallyQuiz(true)
                console.log(numberQuestions)
            }

        }

    return (
        <div className="CreateQuestions">
            <div>
                <Link to="/create_quiz">
                    <ReturnPage quizName={lastName}/>
                </Link> 
            </div>
            <div className='form-question-container'>
                <form className='form-question' onSubmit={sendData}>
                    <div className='form-add'>
                        <label htmlFor="question">Pergunta</label>
                        <textarea
                            className={inputValue ? '' : 'input-void-err' }
                            name="question"
                            rows="5"
                            onChange={getInformations}
                        ></textarea>
                    </div>
                    <div className='form-add'>
                        <label htmlFor="answer">Resposta</label>
                        <textarea
                            className={inputValue ? '' : 'input-void-err'}
                            name="answer"
                            rows="5"
                            onChange={getInformations}
                        ></textarea>
                    </div>
                    <CreateButton text="Adicionar"/>
                    {
                        finallyQuiz && (
                            <div onClick={getNumberQuestionValues}>
                                <Link to="/">
                                    <CreateButton text="finalizar Quiz"/>
                                </Link>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    );
}

export default CreateQuestions;
