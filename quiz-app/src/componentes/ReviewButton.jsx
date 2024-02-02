import "../style/ReviewButton.css"

export default function ReviewButton ( {text, difficult=null} ) {

    function handleDifficult () {
        console.log("Dificuldade 'manejada'", difficult);
        // Local onde a resposta do quiz (fácil, médio, difícil) vai ser computada, modificando o tempo de revisão;
    }

    return (
        <div className="ReviewButton" onClick={handleDifficult}>
            <div className="ReviewButton_content">
                <p>{ text }</p>
            </div>
        </div>
    )
}