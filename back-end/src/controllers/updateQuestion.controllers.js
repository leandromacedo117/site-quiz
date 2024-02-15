import { dbCreateQuiz } from '../../config/db/dbCreateQuiz.js';

export const getJson = (req, res) => {
    const jsonSql = "SELECT quizes FROM quizInformation";


    dbCreateQuiz.query(jsonSql, /*[req.body.last],*/ (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        if (data.length === 0) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }

        const jsonValues = data.map(row => JSON.parse(row.quizes)); // Mapeando e convertendo valores JSON

        const uploadJson = "UPDATE quizInformation SET quizes = ?";
        dbCreateQuiz.query(uploadJson, [jsonValues], (err, date => {
            if (err) {
                return res.status(500).json('err  json')
            }
            else {
                return res.status(200).json('sucess json ')
            }
        }))
    });

    
};
