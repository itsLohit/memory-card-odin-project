import CardsHolder from "../CardsHolder";
import logo from "../../assets/images/logo.png"
import ScoreBoard from "../scoreBoard";

export default function PlayScreen () {

    let score = 0;
    let highestScore = 0;
    return (
        <div>
            <div><img src={logo} alt="logo image" /></div>
            <ScoreBoard 
            score = {score}
            highestScore = {highestScore}
            />
            <CardsHolder />
        </div>
    )
}