import SearchBar from "./SearchBar";
import "./Styles/Navbar.css";

const Navbar = (props) => {
  return (  
    <nav className="navbar">
      <div className="title"><h1>My Chambers</h1></div>
      <div className="searchBar"><SearchBar placeholder="Search" filter={props.filter} onChangeFilter={props.onChangeFilter}/></div>
    </nav>
  );
}
 
export default Navbar;