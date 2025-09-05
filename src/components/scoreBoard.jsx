export default function ScoreBoard ({score, highestScore}) {
    return (
        <div>
            <div className="score">Score: {score}</div>
            <div className="highest-score">Highest Score: {highestScore}</div>
        </div>
    )
}