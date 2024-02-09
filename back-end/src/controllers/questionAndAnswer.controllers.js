import {dbCreateQuiz} from '../../config/db/dbCreateQuiz.js'

export const setQuestionAndAnswer = (req, res) => {
    // Consulta de inicialização para inserir um objeto JSON vazio na tabela
    const initJson = "INSERT INTO quizInformation (quiz_json) VALUES ('{}')";
    
    // Consulta de atualização para adicionar um novo objeto JSON ao array JSON existente
    const setDado = "UPDATE quizInformation SET quiz_json = JSON_ARRAY_APPEND(quiz_json, '$', JSON_OBJECT('id', ?, 'question', ?, 'answer', ?)) WHERE numberQuestion = 0  ";
    
    const deleteColun = "DELETE FROM quizInformation WHERE quizName IS NULL"

    // Executar as consultas
    dbCreateQuiz.query(initJson, (err, data) => {
        if (err) {
            console.log(err);
            return res.json('err');
        } else {
            dbCreateQuiz.query(setDado, [req.body.ids, req.body.question, req.body.answer], (err, data) => {
                if (err) {
                    console.log(err);
                    return res.json('err');
                }
                if (data.affectedRows > 0) {
                    dbCreateQuiz.query(deleteColun, (err) => {
                        if (err) return res.json('err delete')
                        else return res.json('sucesso delete')
                    })
                } else {
                    return res.json('falha');
                }
            });
        }
    });
};
