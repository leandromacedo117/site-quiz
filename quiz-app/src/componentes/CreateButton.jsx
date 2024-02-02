import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import "../style/CreateButton.css"

export default function CreateButton({text}) {
    return(
        // <Link to="/create/create_quiz">
            <div className="CreateButton">
                <button className="CreateButton_content" type="submit">
                    <div>
                        <IoIosAdd size={35}/>
                        <p className="text">{text}</p>
                    </div>
                </button>
            </div>
        // </Link>
    )
}