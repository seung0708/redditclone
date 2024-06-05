import '../styles/navbar.css';
import SearchBar from "./searchbar";
import Button from './button';
const Navbar = (props) => {
    return (
        <nav className='nav'>
            <span className='nav_logo'>Reddit Clone</span>
            <SearchBar className="nav__searchbar" />
            <div className="buttons container">
                <Button>Get app</Button>
                <Button>Log In</Button>
            </div>
        </nav>
    )   
}

export default Navbar; 