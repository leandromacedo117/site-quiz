import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "../style/QuestionAnswer.css";
import Header from "../componentes/Header";

function Question ( {obj} ) {
    return (
        <div className="Question">
            <p>{obj.Question}</p>
        </div>
    )
}
function Answer ( {obj} ) {
    return (
        <div className="Answer">
            <p>{obj.Question}</p>
            <p>{obj.Answer}</p>
        </div>
    )
}

function ManageQuiz ( {item} ) {
    const [index, setIndex] = useState(0)
    const [isSecondClick, setisSecondClick] = useState(false)
    const navigate = useNavigate();

    function changeIndex () {
        if (isSecondClick) {
            if (index+1 == item.quizzes.length){
                navigate('/')
            }else {
                setIndex(index+1);
            }
        }
        setisSecondClick(!isSecondClick);
    }

    return (
        <div className="QuestionAnswer_content" onClick={changeIndex}>
            {
                isSecondClick ? <Answer obj={item.quizzes[index]}/> : <Question obj={item.quizzes[index]}/>
            }
        </div>
    )
    
}

export default function QuestionAnswer () {
    const location = useLocation();
    const item = location.state;
    

    return (
        <div className="QuestionAnswer">
            <Header 
                item={item}
            />
            <ManageQuiz 
                item={item}
            />
            <p className="tip">Click em qualquer lugar para monstrar a resposta</p>
        </div>
    )
}