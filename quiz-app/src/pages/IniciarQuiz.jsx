import { useLocation, Link } from 'react-router-dom'
import Button from '../componentes/Button';
import Header from '../componentes/Header';
import "../style/IniciarQuiz.css";

export default function IniciarQuiz () {
    const location = useLocation();
    const item = location.state;

    return(
        <div className="body">
            <Header 
                item={item}
            />
            <div className="buttons">
                <div className="Iniciar">
                    <Link to="/IniciarQuiz/QuestionAnswer" state={ item }>
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