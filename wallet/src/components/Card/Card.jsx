import './Card.css'
import chipLight from '../../assets/chip-light.svg';

function Card(props) {
    const {vendor, cardNr, cardHolder, validDate} = props;
    return(
       <div className='Card'>
            <div className='chipAndVendor'>
                <img className='cardChip' src={chipLight} alt="chip" /> <span><img className='vendor' src={vendor} alt="" /></span>
            </div>
            <p className='cardNr'>{cardNr}</p>
            <p className='span'>CARDHOLDER <span>VALID THRU</span></p>
            <p className='cardHolder'>{cardHolder} <span>{validDate}</span></p>
               
       </div> 
    )
} 

export default Card