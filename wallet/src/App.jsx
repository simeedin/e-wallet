
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import CardStack from './components/CardStack/CardStack';
import Card from './components/Card/Card';
function App() {
  // const state = useLocation();
  // console.log(state);
  const navigate = useNavigate();
  
  // let getCard = state.state.cards;
  // let arr = [getCard];
  // const displayCards = arr.map((card) => {
  //   return <Card vendor={card.vendor} cardNr={card.cardNr} cardHolder={card.cardHolder} validDate={card.validDate} key={card.id}/>
  // });
  // console.log(displayCards);
  
  
  function handleClick() {
    navigate('/addcard');
  }
  return (
    <div className='App'>
        <Card
          cardNr= 'XXXX XXXX XXXX XXXX'
          cardHolder= 'FIRSTNAME LASTNAME'
          validDate= 'MM/YY'
        />

        <CardStack/>

        

        <button onClick={handleClick}>ADD NEW CARD</button>
    </div>
  )
}

export default App
