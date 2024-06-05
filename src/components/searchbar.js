import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../styles/searchbar.css';


const SearchBar = (props) => {
    return (
        <div className="searchbar">
        <FontAwesomeIcon icon={faSearch} className="searchbar__icon" />
        <input className={props.className} placeholder="Search Reddit" type="text" />
        </div>
    )
}

export default SearchBar;