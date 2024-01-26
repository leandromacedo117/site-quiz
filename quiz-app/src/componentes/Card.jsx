import { HiAcademicCap } from "react-icons/hi";

function Content ({ item }) {
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
    if (option == "todos") {
        return <Content item={item} />
    }
    if (option == "revisao") {
        const data = new Date();
        const lastTimeDone = new Date(item.LastTimeDone);
        lastTimeDone.setDate(lastTimeDone.getDate() + item.DayToNextRetrieval + 1);
        console.log(data, lastTimeDone);
        if (data >= lastTimeDone) {
            return <Content item={item} />
        }
    }
    if (option == "recentes" && item.LastTimeDone == null) {
        return <Content item={item} />
    }
}

export default Card