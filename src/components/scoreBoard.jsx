export default function ScoreBoard ({score, highestScore}) {
    return (
        <div>
            <div className="score">{score}</div>
            <div className="highest-score">{highestScore}</div>
        </div>
    )
}