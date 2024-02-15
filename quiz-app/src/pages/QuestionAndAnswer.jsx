import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "../style/QuestionAnswer.css";
import Header from "../componentes/Header";
import ReviewButton from "../componentes/ReviewButton";
import QuizApi from '../data/quiz';
import { useEffect } from 'react';
import axios from 'axios';



function ManageQuiz (  ) {
    const [index, setIndex] = useState(0)
    const [isSecondClick, setisSecondClick] = useState(false)
    const navigate = useNavigate();
    // const [itemQuiz, setItemQuiz] = useState([])
    const  quizFromApi = QuizApi();


    function changeIndex () {
        if (isSecondClick) {
            if (index+1 == quizFromApi.length){
                navigate('/IniciarQuiz/QuestionAnswer/QuizEnd', { state: quizFromApi })
            }else {
                setIndex(index+1);
            }
        }
        setisSecondClick(!isSecondClick);
    }
    function noIndexChange () {
        setisSecondClick(!isSecondClick);
    }

    function Question ( {obj} ) {
        return (
            <div className="QuestionAnswer_content" onClick={changeIndex}>
                <div className="Question">
                    {/* {lastId === 0 ? console.log('careegando') : console.log(lastId[lastId.length].id)} */}
                    <p>{obj === undefined ? null : obj.Question}</p>
                </div>
            </div>
        )
    }
    function Answer ( {obj} ) {
        return (
            <div className="QuestionAnswer_content">
                <div className="Answer">
                    <div className="Answer_content">
                        <p>{obj === undefined ? null : obj.Question}</p>
                        <p>{obj === undefined ? null : obj.Answer}</p>
                    </div>
                    <div className="DifficultButtons">
                        <div onClick={changeIndex}>
                            <ReviewButton
                                text="Fácil"
                                difficult={null}
                            />
                        </div>
                        <div onClick={changeIndex}>
                            <ReviewButton
                                text="Médio"
                                difficult={null}
                            />
                        </div>
                        <div onClick={changeIndex}>
                            <ReviewButton
                                text="Difícil"
                                difficult={null}
                            />
                        </div>
                        <div onClick={noIndexChange}>
                            <ReviewButton
                                text="De novo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }    

    return (
        <div className="Main">
            {
                isSecondClick ? <Answer obj={quizFromApi[index]}/> : <Question obj={quizFromApi[index]}/>
            }
        </div>
    )
    
}

 export default function QuestionAnswer () {
    // const [item, setItem] = useState('')
    // useEffect(() => {
    //     axios.get('http://localhost:9000/quizzes')
    //         .then(res => {
    //            setItem(res.data);
    //         })
    //         .catch(err => console.log(err));
    // }, []);
  
      

    return (
        <div className="QuestionAnswer">
            {/* <Header 
                item={item}
            /> */}
            <ManageQuiz 
                
            />

            {/* <QuizApi
                item={item}
            /> */}

            <p className="tip">Click em qualquer lugar para monstrar a resposta</p>
        </div>
    )
}