import CardsHolder from "../CardsHolder";
import logo from "../../assets/images/logo.png"
import ScoreBoard from "../scoreBoard";
import { useEffect } from "react";
import '../../styles/playScreen.css';

export default function PlayScreen ({flipped,setGameScreen, gameEndStatus, score, highestScore, cardClickHandle, cardsData}) {
    useEffect(() => {
      if(gameEndStatus === 'Win' || gameEndStatus === 'Lose') {
        setGameScreen('endScreen');
      }
    }, [gameEndStatus, setGameScreen]);

    return (
        <div className="playScreen">
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
                flipped = {flipped}
                />
            </div>
        </div>
    )
}