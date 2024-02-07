import { HiAcademicCap } from "react-icons/hi";
import { Link } from "react-router-dom";

function Content ({ item /*retrieval*/ }) {
    return (
        <Link to="/IniciarQuiz" state={ item }>
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
                    {/* <p>{retrieval}</p> */}
                </div>
            </div>
        </Link>
    )
}

function checkRetrieval (item) {
    var retrieval = 0
    const data = new Date();
    for(var i = 0; i < item.quizes.length; i++)
    {
        const lastTimeDone = new Date(item.quizes[i].LastTimeDone);
        lastTimeDone.setDate(lastTimeDone.getDate() + item.quizes[i].DayToNextRetrieval);
        if (data >= lastTimeDone) {
            retrieval += 1
        }
    }
    return retrieval
}

const Card = ({ item, option }) => {
    if (option == "todos") {
        var retrieval = checkRetrieval (item);
        return <Content item={item}/>
    }
    if (option == "revisao") {
        var retrieval = checkRetrieval (item);
        if (retrieval > 0) {
            return <Content item={item}/>
        }
    }
    if (option == "recentes" && item.LastTimeDone == null) {
        return <Content item={item} />
    }
}

export default Card