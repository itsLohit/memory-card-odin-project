import Cards from "./cards";
import '../styles/cardsHolder.css'; 

export default function CardsHolder ({setScore, setClickedCards, clickedCards}) {
    
    function cardClickHandle(cardId) {
        setClickedCards(prevArray => {
            const safePrevArray = prevArray || [];
            if (safePrevArray.includes(cardId)) {
                return safePrevArray;   
            } else {
                return [...safePrevArray, cardId];
            }
        });
        
        if(!clickedCards.includes(cardId)) {
            setScore(prevScore => prevScore + 1);
        }
    }

    const cardsData = [
        {id: 1, label: 'Card 1'},
        {id: 2, label: 'Card 2'},
        {id: 3, label: 'Card 3'},
        {id: 4, label: 'Card 4'},
        {id: 5, label: 'Card 5'},
        {id: 6, label: 'Card 6'},
        {id: 7, label: 'Card 7'},
        {id: 8, label: 'Card 8'},
        {id: 9, label: 'Card 9'},
        {id: 10, label: 'Card 10'},
        {id: 11, label: 'Card 11'},
        {id: 12, label: 'Card 12'},
        {id: 13, label: 'Card 13'},
        {id: 14, label: 'Card 14'},
        {id: 15, label: 'Card 15'},
        {id: 16, label: 'Card 16'}
    ];
    
return (
    <div>
        <div className="cards-container">
           {cardsData.map(card => (
            <Cards 
            key={card.id}
            cardClickHandle={cardClickHandle}
            cardId = {card.id}
            />
           ))}
        </div>
    </div>
)
}