
import React, {Component} from 'react';
import './App.css';
import BusinessList from "./Business/BusinessList/BusinessList";
import SearchBar from './SearchBar/SearchBar';



const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}


const businesses=[business,business,business,business,business,business] 
class App extends Component{
  constructor(){
    super();

  }
  searchYelp(tems,location,sortBy){
    console.log(`Searching ${tems} with Pizza, ${location}, ${sortBy}`)
  }
  render(){
    return(
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses ={businesses}/>
      </div>
    )
  }

}

export default App;
