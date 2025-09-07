import logo from "../../assets/images/logo.png";
import '../../styles/startScreen.css';
import Loader from '../loader.jsx';

export default function StartScreen({ setGameScreen, isLoading }) {
  return (
    <div className="startScreen">
      <div className="logo">
        <img src={logo} alt="Kung Fu Panda logo" />
      </div>
      <div className="description-box">
        <div>
          <p>
            Tai Lung’s spell has scrambled the memories of all kung fu masters at the Jade Palace.
          </p>
          <p>
            Flip through legendary heroes—don’t choose any twice, or you lose your training!
          </p>
          <p>
            Trust your instincts and restore balance to the Valley of Peace.
          </p>
        </div>
        {
          isLoading
            ? <Loader />
            : <button onClick={setGameScreen}>START TRAINING</button>
        }
      </div>
    </div>
  );
}
