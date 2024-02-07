import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "../style/QuestionAnswer.css";
import Header from "../componentes/Header";
import ReviewButton from "../componentes/ReviewButton";

function ManageQuiz ( {item} ) {
    const [index, setIndex] = useState(0)
    const [isSecondClick, setisSecondClick] = useState(false)
    const navigate = useNavigate();

    function changeIndex () {
        if (isSecondClick) {
            if (index+1 == item.quizes.length){
                navigate('/IniciarQuiz/QuestionAnswer/QuizEnd', { state: item })
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
                    <p>{obj.Question}</p>
                </div>
            </div>
        )
    }
    function Answer ( {obj} ) {
        return (
            <div className="QuestionAnswer_content">
                <div className="Answer">
                    <div className="Answer_content">
                        <p>{obj.Question}</p>
                        <p>{obj.Answer}</p>
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
                isSecondClick ? <Answer obj={item.quizes[index]}/> : <Question obj={item.quizes[index]}/>
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
            {/* <p className="tip">Click em qualquer lugar para monstrar a resposta</p> */}
        </div>
    )
}