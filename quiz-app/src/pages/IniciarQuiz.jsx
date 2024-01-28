import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import Button from '../componentes/Button';
import "../style/IniciarQuiz.css";
import back from "../assets/Back.png"

export default function IniciarQuiz () {
    const location = useLocation();
    const item = location.state;

    return(
        <div className="body">
            <div className="header">
                <div className="back">
                    <Link to="/">
                        <img src={back} width="40"/>
                    </Link>
                </div>
                <p className="quizName">{ item.quizName }</p>
            </div>
            <div className="buttons">
                <div className="Iniciar">
                    <Link to="/IniciarQuiz/QuestionAnswer">
                        <Button text="Iniciar Quiz"/>
                    </Link>
                </div>
                <div className="Editar">
                    <Link to="/">
                        <Button text="Editar"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}