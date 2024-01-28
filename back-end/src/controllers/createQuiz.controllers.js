import {dbCreateQuiz} from '../../config/db/dbCreateQuiz.js'

export const setCreatequiz= (req,res) => {
    const setDado = "INSERT INTO  quizinformation (quizName, descriptionQuiz, category ) VALUES (?, ?, ?)";

    dbCreateQuiz.query(setDado, [req.body.quizName, req.body.description, req.body.category], (err, data) => {
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