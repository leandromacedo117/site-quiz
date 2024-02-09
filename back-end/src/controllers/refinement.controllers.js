import {dbCreateQuiz} from '../../config/db/dbCreateQuiz.js'

export const setQuestionAndAnswer= (req,res) => {

     const getDado = "UPDATE quizinformation SET quiz_json = ? WHERE id = ?";

    dbCreateQuiz.query(setDado, [req.body.ids, req.body.question, req.body.answer, req.body.last], (err, data) => {
        if(err) {
            console.log(err)
            return res.json('err')
        }
        if (data.affectedRows > 0) return res.json('sucesso!')
        else {
            return res.json('falha')
    }
    })
} 