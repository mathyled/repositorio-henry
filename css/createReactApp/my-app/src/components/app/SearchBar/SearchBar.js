import React from "react";
import "./SearchBar.css";



const sortByOptions={
    "bestMatch":"best_match", // key: "value",
    "hightestRated":"rating",
    "mostReviewed":"review_count"
}
 // Objet.keys => [bestMatch,hightestRated,mostReviewed]
 // [bestMatch,hightestRated,mostReviewed].map(cb)
//                            i
export default class SearchBar extends React.Component{
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption=>{ let sortByOptionValue= sortByOptions[sortByOption];
        return <li key={sortByOptionValue}> {sortByOption} </li>
        })
        // key es el identificador unico que pide React para componentes hijos
    }
    // [bestMatch,hightestRated,mostReviewed].map(elemt => 
    // let value=sortByOptions[elemt] )
    render(){
        return(
            <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
        {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let's Go</a>
  </div>
</div>
        )
    }
}