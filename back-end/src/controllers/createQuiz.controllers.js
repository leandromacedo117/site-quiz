import {dbCreateQuiz} from '../../config/db/dbCreateQuiz.js'

export const setCreatequiz= (req,res) => {
    const setDado = "INSERT INTO  quizinformation (quizName, descriptionQuiz, category, numberQuestion, LastTimeDone, DayToNextRetrieval, quiz_json ) VALUES (?, ?, ?, ?, ?, ?, ?)";

    dbCreateQuiz.query(setDado, [req.body.quizName, req.body.description, req.body.category, req.body.numberQuestion, req.body.LastTimeDone, req.body.DayToNextRetrieval, req.body.quiz_json], (err, data) => {
        if(err) {
            console.log(err)
            return res.json('err ')
        }
        if (data.affectedRows > 0) return res.json('dados enviados!')
        else {
            return res.json('falha')
    }
    })
} 