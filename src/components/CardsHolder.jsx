import Cards from "./cards";
import '../styles/cardsHolder.css'; 
import characters from "./characters.js";
import { useState } from "react";

export default function CardsHolder ({setScore, setClickedCards, clickedCards}) {

    const initialCardsData = [
        {id: 1, label: 'Card 1', img:characters[0].img},
        {id: 2, label: 'Card 2', img:characters[1].img},
        {id: 3, label: 'Card 3', img:characters[2].img},
        {id: 4, label: 'Card 4', img:characters[3].img},
        {id: 5, label: 'Card 5', img:characters[4].img},
        {id: 6, label: 'Card 6', img:characters[5].img},
        {id: 7, label: 'Card 7', img:characters[6].img},
        {id: 8, label: 'Card 8', img:characters[7].img},
        {id: 9, label: 'Card 9', img:characters[8].img},
        {id: 10, label: 'Card 10', img:characters[9].img},
        {id: 11, label: 'Card 11', img:characters[10].img},
        {id: 12, label: 'Card 12', img:characters[11].img},
        {id: 13, label: 'Card 13', img:characters[12].img},
        {id: 14, label: 'Card 14', img:characters[13].img},
        {id: 15, label: 'Card 15', img:characters[14].img},
        {id: 16, label: 'Card 16', img:characters[15].img},
    ];

    const [cardsData, setCardsData] = useState(initialCardsData);
    
    function cardClickHandle(cardId) {
        if(!clickedCards.includes(cardId)) {
            setClickedCards([...clickedCards, cardId])
            setScore(prevScore => prevScore + 1);
        }
        else {
            return false;
        }
        setCardsData(shuffleArray(cardsData));
    }

    

    function shuffleArray(array) {
        const newArray = [...array];
        for(let i = newArray.length - 1; i>0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
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