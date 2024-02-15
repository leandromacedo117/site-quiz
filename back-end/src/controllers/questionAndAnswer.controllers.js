import {dbCreateQuiz} from '../../config/db/dbCreateQuiz.js'

export const setQuestionAndAnswer = (req, res) => {
    // Consulta de inicialização para inserir um objeto JSON vazio na tabela
    const initJson = "INSERT INTO quizInformation (quizes) VALUES ('{}')";
    
    // Consulta de atualização para adicionar um novo objeto JSON ao array JSON existente
    const setDado = "UPDATE quizInformation SET quizes = JSON_ARRAY_APPEND(quizes, '$', JSON_OBJECT( 'Question', ?, 'Answer', ?, 'LastTimeDone', ?,'DayToNextRetrieva', ?, 'nRetrieval', ?)) WHERE numberQuestion = 0  ";
    
    const deleteObjectVoid = "UPDATE quizInformation SET quizes = JSON_REMOVE(quizes, '$[0]') WHERE JSON_LENGTH(quizes) > 0 AND JSON_TYPE(quizes) = 'ARRAY'"; 

    const deleteColun = "DELETE FROM quizInformation WHERE quizName IS NULL"

    // Executar as consultas
    dbCreateQuiz.query(initJson, (err, data) => {
        if (err) {
            console.log(err);
            return res.json('err');
        } else {
            dbCreateQuiz.query(setDado, [ req.body.question, req.body.answer,  req.body.LastTimeDone, req.body.DayToNextRetrieval, req.body.nRetrieval], (err, data) => {
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
