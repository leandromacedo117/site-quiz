import {dbQuizzes} from "../../config/db/dbQuizzes.js"

export const getQuizzes  = (req, res) =>{
    
    const queryy = "SELECT * FROM quizInformation"

    dbQuizzes.query(queryy, (err, date) => {
        if(err) return res.json(err)

        return res.status(200).json(date)
    })
}