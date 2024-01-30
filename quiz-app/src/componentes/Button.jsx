import "../style/IniciarQuiz.css";

export default function IniciarButton({ text }) {
    return(
        <div className="IniciarButton">
            <div className="IniciarButton_content">
                <p className="text">{ text }</p>
            </div>
        </div>
    )
}