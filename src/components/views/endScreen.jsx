import logo from "../../assets/images/logo.png"

export default function EndScreen ({gameEndStatus, resetGame}) {
    let description = 'You Lose';

    if (gameEndStatus === 'Win') {
        description = 'You Win';
    }

    return (
        <div>
            <div className="logo"><img src={logo} alt="logo image" /></div>
            <div className="description-box">
                <p>{description}</p>
                <button onClick={() => { resetGame() }}>Play Again</button>
            </div>
        </div>
    )
}