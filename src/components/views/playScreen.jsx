import CardsHolder from "../CardsHolder";
import logo from "../../assets/images/logo.png"
import ScoreBoard from "../scoreBoard";
import { useEffect } from "react";
import '../../styles/playScreen.css';

export default function PlayScreen ({setGameScreen, gameEndStatus, score, highestScore, cardClickHandle, cardsData}) {

    useEffect(() => {
      if(gameEndStatus === 'Win' || gameEndStatus === 'Lose') {
        setGameScreen('endScreen');
      }
    }, [gameEndStatus, setGameScreen]);

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
                cardClickHandle = {cardClickHandle}
                cardsData = {cardsData}
                />
            </div>
        </div>
    )
}