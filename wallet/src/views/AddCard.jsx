import './AddCard.css';
import CardForm from "../components/CardForm/CardForm";
import Card from '../components/Card/Card';
import CardStack from '../components/CardStack/CardStack';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid';



function AddCard() {
    const navigate = useNavigate();
    
    const [cards, setCards] = useState([]);
    
    function newCard(card) {
        
        const newCard = {
            id: uuid(),
            vendor: card.vendor,
            cardNr: card.cardNr,
            cardHolder: card.cardHolder,
            validDate: card.validDate
        }
        setCards((cards) => {
            const arr = [...cards, newCard];
            // console.log(arr);
            return arr;
        });
    }

    

    const displayCards = cards.map((card) => {
        return <Card vendor={card.vendor} cardNr={card.cardNr} cardHolder={card.cardHolder} validDate={card.validDate} key={card.id}/>
    });

    
    

    return (
        <div className="AddCard">
            {/* <Card
                vendor= ''
                cardNr= 'XXXX XXXX XXXX XXXX'
                cardHolder= 'FIRSTNAME LASTNAME'
                validDate= 'YY/MM'
            /> */}
            <CardForm newCard={newCard}/>
            <button onClick={() => {navigate('/')}}></button>
            <CardStack displayCards={displayCards}/>
        </div>
    )
}

export default AddCard