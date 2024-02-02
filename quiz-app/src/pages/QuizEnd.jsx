import { useLocation, Link } from 'react-router-dom';
import Header from "../componentes/Header";
import Button from "../componentes/Button";
import "../style/QuizEnd.css"

export default function QuizEnd () {
    const location = useLocation();
    const item = location.state;

    return (
        <div className="QuizEnd">
            <Header 
                item={item}
            />
            <div className="QuizEnd_content">
                <p className="Congrats">Parabéns! Você terminou esse quiz!</p>
                <div>
                    <Link to="/">
                        <Button 
                            text={"Voltar"}
                        />
                    </Link>
                    <Link to="/">
                        <Button 
                            text={"Desempenho"}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}