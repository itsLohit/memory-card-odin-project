import Cards from "./cards";
import '../styles/cardsHolder.css'; 

export default function CardsHolder ({cardClickHandle, cardsData}) {
    
return (
    <div>
        <div className="cards-container">
           {cardsData.map(card => (
            <Cards 
            key={card.id}
            cardClickHandle={() => cardClickHandle(card.id)}
            label = {card.label}
            img = {card.img}
            />
           ))}
        </div>
    </div>
)
}