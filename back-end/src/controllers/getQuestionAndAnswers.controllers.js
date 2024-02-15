import { dbCreateQuiz } from '../../config/db/dbCreateQuiz.js';

export const getQuestionAndAnswers = (req, res)  => {
    const quizesJson = 'SELECT quizes FROM quizInformation'
    dbCreateQuiz.query(quizesJson, (err, date) => {
        if (err) return res.json('err sql')
        else {
            res.status(200).json(date)
        }
    })
}