import logo from "../../assets/images/logo.png";
import '../../styles/endScreen.css';

export default function EndScreen({ gameEndStatus, resetGame }) {
    let description;

    if (gameEndStatus === 'Win') {
        description = (
            <>
                <strong>You win!</strong> <br /> Order is restored to the Valley of Peace.<br />
                Your memory shines brighter than jade, and the legendary masters salute the wisdom of a true Dragon Warrior.<br />
                The festive spirit returns to the Jade Palace—and every hero, every memory, stands united once again.
            </>
        );
    } else {
        description = (
            <>
                <strong>You lose.</strong> <br /> The memory spell lingers across the Jade Palace.<br />
                Tai Lung’s mischief has claimed victory this time—and the masters remain lost in confusion.<br />
                But keep your courage! A true Dragon Warrior learns from every step. The peace of the valley awaits your return.
            </>
        );
    }

    return (
        <div className="endScreen">
            <div className="logo"><img src={logo} alt="logo image" /></div>
            <div className="description-box">
                <p>{description}</p>
                <button onClick={resetGame}>Train Again</button>
            </div>
        </div>
    );
}
