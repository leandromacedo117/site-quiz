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
    const data = new Date("09-01-2023");
    // console.log(data.getDate())
    // console.log(item.LastTimeDone);
    // const a = item.LastTimeDone;
    // a.setDate(a.getDate() + item.DayToNextRetrieval);
    if (option == "todos") {
        return <Content item={item} />
    }
    else if (option == "revisao" && a >= data) {
        return <Content item={item} />
    }
}

export default Card