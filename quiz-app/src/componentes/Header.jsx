import "../style/Header.css";
import { Link } from "react-router-dom";
import back from "../assets/Back.png";

export default function Header ( {item} ) {
    return (
        <div className="header">
            <div className="back">
                <Link to="/">
                    <img src={back} width="40"/>
                </Link>
            </div>
            <p className="quizName">{ item.quizName }</p>
        </div>
    )
}