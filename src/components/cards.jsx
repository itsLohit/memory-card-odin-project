import '../styles/cards.css';
import backImg from '../assets/images/back_face.png';
import Tilt from 'react-parallax-tilt';


export default function Cards({ cardClickHandle, img, flipped }) {
  return (
    <div className="card-container">
      <div className={`card${flipped ? " flipped" : ""}`} onClick={cardClickHandle}>
        <div className="card-face front">
          <Tilt className='tint' perspective={1000} transitionSpeed={1000} transitionEasing='cubic-bezier(.03,.98,.52,.99)'><img src={img} alt="front image" /></Tilt>
        </div>
        <div className="card-face back">
          <img src={backImg} alt="back image" />
        </div>
      </div>
    </div>
  );
}