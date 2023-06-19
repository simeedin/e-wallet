import './AddCard.css';
import CardForm from "../components/CardForm/CardForm";
import Header from '../components/Header/Header';
import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid';



function AddCard() {
    const navigate = useNavigate();
    
    const [cards, setCards] = useState(() => {
        const checkStorage = localStorage.getItem('cards');
        const storedCards = JSON.parse(checkStorage);
        return storedCards || [];
    });

    useEffect(() => {

        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);
    
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


    
    

    return (
        <div className="AddCard">
            <Header
                headText='ADD A NEW BANK CARD'
                headSubText='NEW CARD'
            />
            <CardForm newCard={newCard}/>
            <button className='backToWallet' onClick={() => {navigate('/')}}>BACK TO WALLET</button>
        </div>
    )
}

export default AddCard