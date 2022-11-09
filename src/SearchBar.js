import "./Styles/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props){
  const handleFilter = (event) => {
    props.onChangeFilter(event.target.value.trim().toLowerCase());
    console.log(event.target.value);
  };

  return (
    
    <div className="search">
      <div className="searchInputs">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <input type="text" placeholder={props.placeholder} onChange={handleFilter}/>
      </div>
    </div>
  );
}
 
export default SearchBar;