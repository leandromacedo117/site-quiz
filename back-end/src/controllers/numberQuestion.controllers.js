import {dbCreateQuiz} from '../../config/db/dbCreateQuiz.js'

export const setNumberQustion = (req, res) => {
    // const numberQuestion = "INSERT INTO quizIormation (numberQuestion) "
    const updateNumberQuestion = "UPDATE quizInformation SET numberQuestion = ? WHERE numberQuestion = 0"
    const deleteColunVoid = "DELETE FROM quizInformation WHERE quizName IS NULL"

    const deleteObjectVoid = "UPDATE quizInformation SET quizes = JSON_REMOVE(quizes, '$[0]') WHERE JSON_LENGTH(quizes) > 0 AND JSON_TYPE(quizes) = 'ARRAY' ";

    dbCreateQuiz.query(updateNumberQuestion, [req.body.numberQuestion], (err, date) => {
        if (err) {
            return res.json('err update');
        }
         else {
            dbCreateQuiz.query(deleteColunVoid, (err) => {
                if (err) {
                    return res.json('err delete');
                } else {
                    dbCreateQuiz.query(deleteObjectVoid, (err) => {
                        if (err) {return res.json('err delete')}
                        else {
                            return res.json('sucess delete')
                        }
                })
            }
            });
        }
    });

}