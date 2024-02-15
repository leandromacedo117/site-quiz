// QuestionAnswer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../componentes/Header";
import QuestionAndAnswer from '../pages/QuestionAndAnswer'

function ManageQuiz() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const response = await axios.get('http://localhost:9000/quizes_json');
            const quizesData = response.data.map(item => JSON.parse(item.quizes));
            setItem(quizesData);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    }

    console.log(item); // Este console.log só será útil para depuração

    return (
        <div className="QuestionAnswer">
            <Header />
            <QuestionAndAnswer item={item} />
        </div>
    );
}

export default ManageQuiz;
