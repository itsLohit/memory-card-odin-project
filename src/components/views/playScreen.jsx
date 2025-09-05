import CardsHolder from "../CardsHolder";
import logo from "../../assets/images/logo.png"
import ScoreBoard from "../scoreBoard";
import { useState } from "react";
import '../../styles/playScreen.css';

export default function PlayScreen () {

    const [score, setScore] = useState(0);
    const [highestScore, setHighestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    return (
        <div>
            <div className="header-area">
                <div className="logo"><img src={logo} alt="logo image" /></div>
                <ScoreBoard
                score = {score}
                highestScore = {highestScore}
                />
            </div>
            <div className="play-area">
                <CardsHolder 
                setScore = {setScore}
                setClickedCards={setClickedCards}
                clickedCards = {clickedCards}
                />
            </div>
        </div>
    )
}