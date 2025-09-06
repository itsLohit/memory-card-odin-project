import logo from "../../assets/images/logo.png"

export default function StartScreen ({setGameScreen}) {
    return (
        <div>
            <div className="logo"><img src={logo} alt="logo image" /></div>
            <div className="description-box">
                <p>Welcome to the memory card game</p>
                <button onClick={setGameScreen}>Start Game</button>
            </div>
        </div>
    )
}