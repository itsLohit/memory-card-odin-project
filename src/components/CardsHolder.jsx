import Cards from "./cards";
import '../styles/cardsHolder.css'; 

export default function CardsHolder ({cardClickHandle, cardsData, flipped}) {
    
return (
    <div>
        <div className="cards-holder-container">
           {cardsData.map(card => (
            <Cards 
            key={card.id}
            cardClickHandle={() => cardClickHandle(card.id)}
            label = {card.label}
            img = {card.img}
            flipped ={flipped}
            />
           ))}
        </div>
    </div>
)
}