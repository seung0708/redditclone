import Navbar from "./navbar"
const Header = (props) => {
    return (
        <header className={props.className}>
            <Navbar/>
        </header>
    )
}

export default Header;