import './Header.css';

function Header(props) {
    const {headText, headSubText} = props;
    
    return (
        <header className='header'>
            <h1>{headText}</h1>
            <p>{headSubText}</p>
        </header>

    )
}

export default Header;