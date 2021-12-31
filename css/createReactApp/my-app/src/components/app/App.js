
import React, {Component} from 'react';
import './App.css';
import BusinessList from "./Business/BusinessList/BusinessList";
import SearchBar from './SearchBar/SearchBar';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }

}

export default App;
