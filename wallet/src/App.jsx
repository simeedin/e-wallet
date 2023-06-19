
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import CardStack from './components/CardStack/CardStack';
import Card from './components/Card/Card';
function App() {
  const [allCards, setAllCards] = useState([]);
  const [activeCard, setActiveCard] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const getCards = localStorage.getItem('cards');
    if(getCards !== null) {
      const cards = JSON.parse(getCards);
      setAllCards(cards);
    }
  }, []);

  const displayCards = allCards.map((card) => {
    if(card !== activeCard)
    return  <Card vendor={card.vendor} cardNr={card.cardNr} cardHolder={card.cardHolder} validDate={card.validDate} key={card.id} getActiveCard={() => getActiveCard(card)} removeCard={() => removeCard(card)} removeBtn='showRemoveBtn'/>
  });

  function getActiveCard(card) {
    setActiveCard(card);
  }

  function removeCard(card) {
    const chosenCard = card.id;
    const updateCards = allCards.filter((card) => card.id !== chosenCard);
    localStorage.setItem('cards', JSON.stringify(updateCards));
    setAllCards(updateCards);
  }

  
  
  
  function handleClick() {
    navigate('/addcard');
  }
  return (
    <div className='App'>
        <Header
          headText='E-WALLET'
          headSubText={activeCard ? 'ACTIVE CARD' : null}
        />
        
        {activeCard ?
          <Card 
            vendor={activeCard.vendor}
            cardNr={activeCard.cardNr}
            cardHolder={activeCard.cardHolder}
            validDate={activeCard.validDate}
            activeCard={activeCard}
         /> 

         : <Card cardNr='NO ACTIVE CARD'/>
        }
        {displayCards.length > 0 ? <h2>MY WALLET</h2> : <h2>WALLET IS EMPTY</h2>}
        <CardStack displayCards={displayCards}/>

        

        <button className='addNewBtn' onClick={handleClick}>ADD A NEW CARD</button>
    </div>
  )
}

export default App
