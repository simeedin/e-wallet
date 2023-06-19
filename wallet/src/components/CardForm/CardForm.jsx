import './CardForm.css';
import bitcoin from '../../assets/vendor-bitcoin.svg';
import blockchain from '../../assets/vendor-blockchain.svg';
import evil from '../../assets/vendor-evil.svg';
import ninja from '../../assets/vendor-ninja.svg';
import Card from "../Card/Card";
import {v4 as uuid} from 'uuid';

function CardForm(props) {
    const {card, setCard} = props;
    
    const handleChange = (event) => {
        setCard({...card, [event.target.name]: event.target.value, id: uuid()});
    }
    
    const handleSubmit = (event) => { 
        event.preventDefault();
        setCard({vendor: '', cardNr: '', cardHolder: '', validDate: ''})
        const getCards = localStorage.getItem('cards');
        if(getCards) {
            const cards = JSON.parse(getCards);
            cards.push(card);
            localStorage.setItem('cards', JSON.stringify(cards));
        } else {
            localStorage.setItem('cards', JSON.stringify([card]))
        }
        
    }
    return (
        <div className='CardForm'>
            <Card
                vendor={card.vendor}
                cardNr={card.cardNr}
                cardHolder={card.cardHolder}
                validDate={card.validDate}
                removeBtn='hideRemoveBtn'
            />
            <form className='form' onSubmit={handleSubmit}>
                <p>Card number</p>
                <input
                    type='text'
                    name='cardNr'
                    placeholder='XXXX XXXX XXXX XXXX'
                    value={card.cardNr}
                    onChange={handleChange}
                />
                <p>Cardholder name</p>
                <input
                    type='text'
                    name='cardHolder'
                    placeholder='FIRSTNAME LASTNAME'
                    value={card.cardHolder}
                    onChange={handleChange}
                />
                <p>Valid thru</p>
                <input
                    type='text'
                    name='validDate'
                    placeholder='MM/YY'
                    value={card.validDate}
                    onChange={handleChange}
                />
                <p>Bank</p>
                <select name="vendor" value={card.vendor} onChange={handleChange}>
                    <option value='' hidden></option>
                    <option value={bitcoin}>Bitcoin Inc</option>
                    <option value={blockchain}>Blockchain Inc</option>
                    <option value={evil}>Evil Corp</option>
                    <option value={ninja}>Ninja Bank</option>
                </select>
                <button className='submitBtn' type='submit'>ADD CARD</button>
            </form>
        </div>
    )
}

export default CardForm