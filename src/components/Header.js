import logo from '../images/Troll Face.png'

function Header() {
    return (
        <nav className='header'>
            <img className='header-logo' src={logo} alt=""/>
            <h2>MEME GENERATOR</h2>
            <h4>React Course - Project 3</h4>
        </nav>

    )
}

export default Header;