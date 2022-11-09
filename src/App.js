import Navbar from './Navbar';
import Home from './Home';
import './Styles/App.css';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/chambers.json'
    )
      .then(function(response){
        //console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        setChambers(myJson);
      });
  }, []);
  
  const [chambers, setChambers] = useState([]);

  //console.log(chambers);

  const [filteredChambers, setFilteredChambers] = useState([]);

  const [filter, setFilter] = useState(""); 

  useEffect(() => {
    if(!chambers || chambers.length === 0)
    return;
    if(filter && filter.trim().length > 0){
      setFilteredChambers(chambers.filter((chamber) => {
        return chamber.name.toLowerCase().includes(filter.toLowerCase());
      }));
      return;
    }
    console.log(filter);

  setFilteredChambers(chambers)
  },[chambers, filter]);

  

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter.toLowerCase());
  }

  return (
    <div className="App">
      <Navbar filter={filter} onChangeFilter={handleFilterChange}/>  
      <div className="content">
        <Home filteredChambers={filteredChambers}/>
      </div>
    </div>
  );
}

export default App;
