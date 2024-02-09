import {dbCreateQuiz} from '../../config/db/dbCreateQuiz.js'

export const  getJson = (req,res) => {
    const jsonSql = "SELECT quiz_json FROM quizInformation WHERE id = ?";

    dbCreateQuiz.query(jsonSql, [req.body.last], (err, date) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        if (date.length === 0) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }

        const jsonValue = date[0].quiz_json; // Obtendo o valor do JSON retornado

        return res.status(200).json({ jsonValue });
    })
}