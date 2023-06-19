import './Card.css'
import chipLight from '../../assets/chip-light.svg';
import bitcoin from '../../assets/vendor-bitcoin.svg';
import blockchain from '../../assets/vendor-blockchain.svg';
import evil from '../../assets/vendor-evil.svg';
import ninja from '../../assets/vendor-ninja.svg';

function Card(props) {
    const {vendor, cardNr, cardHolder, validDate, getActiveCard, removeCard, activeCard, removeBtn} = props;
    let currentVendor = '';
    if(vendor == bitcoin) {
        currentVendor = 'bitcoin'
    } else if(vendor == blockchain) {
        currentVendor = 'blockchain'
    } else if(vendor == evil) {
        currentVendor = 'evil'
    } else if(vendor == ninja) {
        currentVendor = 'ninja'
    } else {
        currentVendor = 'Card'
    }
    
    
    return(
        <div className='cardWrapper'>
            <div onClick={getActiveCard}>    
                <div className={currentVendor}>
                    <div className='chipAndVendor'>
                    <img className='cardChip' src={chipLight} alt="chip" /> <span><img className='vendor' src={vendor} alt="" /></span>
                    </div>
                    <p className='cardNr'>{cardNr}</p>
                    <p className='cardHolder'>CARDHOLDER <span>VALID THRU</span></p>
                    <p className='name'>{cardHolder} <span className='validDate'>{validDate}</span></p>
                    
                </div> 
            </div>
            <div>
                {currentVendor !== 'Card' && !activeCard ? <button className={removeBtn} onClick={removeCard} >DELETE</button> : null}
            </div>
       </div> 
    )
} 

export default Card