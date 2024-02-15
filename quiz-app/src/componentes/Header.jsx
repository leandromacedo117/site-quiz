import "../style/Header.css";
import { Link } from "react-router-dom";
import back from "../assets/Back.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header ( {item} ) {

    

    useEffect(() => {
        axios.get('http://localhost:9000/quizzes')
            .then(res => {
                item = (res.data);
                console.log(item.id)
            })
            .catch(err => console.log(err));
    }, []);

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