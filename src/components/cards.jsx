import cardsImage from '../assets/images/card.jpg'
import '../styles/cards.css'

export default function Cards () {
    return (
        <div className='card-img'>
            <img src= {cardsImage} alt="card pic" />
        </div>
    )
}