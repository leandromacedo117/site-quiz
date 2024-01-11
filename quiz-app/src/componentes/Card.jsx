import { HiAcademicCap } from "react-icons/hi";

function content () {
    return (
        <div className="list-todo">
            <div className="list-content-todo">       
                <div className="banner-quiz">
                    <div className="icon-studies">
                        <HiAcademicCap  />
                    </div>
                    <h3 className="name-quiz-h">
                        <p>{item.quizName}</p>  
                    </h3>
                </div>
                <p>{item.numberQuestion}</p>
            </div>
        </div>
    )
    
}

const Card = ({ item, option }) => {
    const data = new Date();
    console.log(data.getData());
    console.log(item.LastTimeDone.getDate());
    if (option == "todos") {
        return content
    }
    else if (option == "revisao" && item.LastTimeDone.setDate(item.LastTimeDone.getDate() + item.DayToNextRetrieval) >= data) {
    }
}

export default Card