import cardsImage from '../assets/images/card.jpg'
import '../styles/cards.css'

export default function Cards ({cardClickHandle, cardId}) {
    return (
        <div className='card-img' onClick={() => cardClickHandle(cardId)}>
            <img src= {cardsImage} alt="card pic" />
        </div   >
    )
}