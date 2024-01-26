import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import "../style/CreateButton.css"

export default function CreateButton() {
    return(
        <Link to="/create/create_quiz">
            <div className="CreateButton">
                <div className="CreateButton_content">
                    <IoIosAdd size={35}/>
                    <p className="text">Criar</p>
                </div>
            </div>
        </Link>
    )
}