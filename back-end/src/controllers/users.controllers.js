import { dbUsers } from "../../config/db/dbUsers.js"

export const getUsers  = (req, res) =>{
    
    const queryy = "SELECT * FROM user"

    dbUsers.query(queryy, (err, date) => {
        if(err) return res.json(err)

        return res.status(200).json(date)
    })
}