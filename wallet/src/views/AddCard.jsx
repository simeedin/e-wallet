import './AddCard.css';
import CardForm from "../components/CardForm/CardForm";
import Header from '../components/Header/Header';
import { useState } from "react";
import {useNavigate } from "react-router-dom";



function AddCard() {
    const navigate = useNavigate();
    
    const [card, setCard] = useState({vendor: '', cardNr: '', cardHolder: '', validDate: ''});
    

    return (
        <div className="AddCard">
            <Header
                headText='ADD A NEW BANK CARD'
                headSubText='NEW CARD'
            />
            <CardForm
             card={card}
             setCard={setCard}   
             />
            <button className='backToWallet' onClick={() => {navigate('/')}}>BACK TO WALLET</button>
        </div>
    )
}

export default AddCard