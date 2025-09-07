import { useEffect, useState, useRef } from "react";
import StartScreen from "./views/startScreen";
import PlayScreen from "./views/playScreen";
import EndScreen from "./views/endScreen";
import characters from "./characters.js";

export default function GameController() {
    const [gameScreen,  setGameScreen] = useState('startScreen');
    const [gameEndStatus, setGameEndStatus] = useState('');
    const [score, setScore] = useState(0);
    const [highestScore, setHighestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [flipped, setFlipped] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const loadedCount = useRef(0);

    const initialCardsData = [
        {id: 1, label: characters[0].name, img:characters[0].img},
        {id: 2, label: characters[1].name, img:characters[1].img},
        {id: 3, label: characters[2].name, img:characters[2].img},
        {id: 4, label: characters[3].name, img:characters[3].img},
        {id: 5, label: characters[4].name, img:characters[4].img},
        {id: 6, label: characters[5].name, img:characters[5].img},
        {id: 7, label: characters[6].name, img:characters[6].img},
        {id: 8, label: characters[7].name, img:characters[7].img},
        {id: 9, label: characters[8].name, img:characters[8].img},
        {id: 10, label: characters[9].name, img:characters[9].img},
        {id: 11, label: characters[10].name, img:characters[10].img},
        {id: 12, label: characters[11].name, img:characters[11].img},
    ];


    const [cardsData, setCardsData] = useState(initialCardsData);
    const cardsImgUrls = cardsData.map(card => card.img);
    console.log(cardsImgUrls);

    useEffect(() => {
      if (isLoading) {
        loadedCount.current = 0;
        const imageUrls = cardsData.map(card => card.img);
  
        imageUrls.forEach(url => {
          const img = new window.Image();
          img.src = url;
          img.onload = () => {
            loadedCount.current++;
            if (loadedCount.current === imageUrls.length) {
              setIsLoading(false);
              setGameScreen('playScreen');
            }
          };
        });
      }
    }, [isLoading, cardsData]); 


    function handleStartClick() {
      setIsLoading(true); 
    }

    function cardClickHandle(cardId) {
        if(!clickedCards.includes(cardId)) {
            setFlipped(true);
            const newScore = score + 1;
            setClickedCards([...clickedCards, cardId])
            setScore(prevScore => prevScore + 1);
            if (newScore > highestScore) {
                setHighestScore(newScore);
            }
            if (clickedCards.length + 1 === cardsData.length) setGameEndStatus('Win');
        }
        else {
            setGameEndStatus('Lose');
        }
        
    }

    function shuffleArray(array) {
        const newArray = [...array];
        for(let i = newArray.length - 1; i>0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    function resetGame() {
        setScore(0);
        setClickedCards([]);
        setGameEndStatus('');
        setGameScreen('playScreen');
    }

    useEffect(() => {
        if (flipped) {
            const flipToBackTimer = setTimeout(() => {
                setCardsData(shuffleArray(cardsData));   
                
                setTimeout(() => {
                    setFlipped(false); 
                }, 100); 
            }, 500); 
            return () => {
                clearTimeout(flipToBackTimer);
                
            };
        }
    }, [flipped, cardsData]);
    

    if (gameScreen === 'startScreen') {
        return (
            <StartScreen 
              setGameScreen={handleStartClick}
              isLoading={isLoading}
            />
        )
    } else if (gameScreen === 'playScreen') {
        return (
            <PlayScreen 
              setGameScreen={setGameScreen}
              gameEndStatus={gameEndStatus}
              score= {score}
              highestScore = {highestScore}
              cardClickHandle = {cardClickHandle}
              cardsData = {cardsData}
              flipped = {flipped}
            />
        )
    } else if (gameScreen === 'endScreen') {
        return (
           <EndScreen 
              gameEndStatus = {gameEndStatus}
              resetGame = {resetGame}
            /> 
        )
    }
}