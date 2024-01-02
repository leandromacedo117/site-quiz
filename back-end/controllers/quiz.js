import {data} from "../data.js"

export const getUsers  = (req, res) =>{
    
    const queryy = "SELECT * FROM quizUser"

    data.query(queryy, (err, date) => {
        if(err) return res.json(err)

        return res.status(200).json(date)
    })
}