import {dbCreateQuiz} from '../../config/db/dbCreateQuiz.js'

export const setNumberQustion = (req, res) => {
    // const numberQuestion = "INSERT INTO quizIormation (numberQuestion) "
    const updateNumberQuestion = "UPDATE quizInformation SET numberQuestion = ? WHERE DayToNextRetrieval = 0"
    const deleteColunVoid = "DELETE FROM quizInformation WHERE quizName IS NULL"

    dbCreateQuiz.query(updateNumberQuestion, [req.body.numberQuestion], (err, date) => {
        if (err) {
            return res.json('err update');
        }
         else {
            dbCreateQuiz.query(deleteColunVoid, (err) => {
                if (err) {
                    return res.json('err delete');
                } else {
                    return res.json('sucess delete !');
                }
            });
        }
    });

}