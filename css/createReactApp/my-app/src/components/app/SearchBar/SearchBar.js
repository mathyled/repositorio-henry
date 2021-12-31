import React from "react";
import "./SearchBar.css";


// Objet.keys => [bestMatch,hightestRated,mostReviewed]
// [bestMatch,hightestRated,mostReviewed].map(cb)
//                            i
const sortByOptions = {
  "bestMatch": "best_match", // key: "value",
  "hightestRated": "rating",
  "mostReviewed": "review_count"
}
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match"
    }

    this.handleTermsChange=this.handleTermsChange.bind(this);
    this.handleLocationChange=this.handleLocationChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }
  getSortByClass(sortByOption){
    if(sortByOption===this.state.sortBy){
      return"active"
    }
    return "";
  }

  handleTermsChange(e){
    this.setState({term: e.target.value})
  }

  handleLocationChange(e){
    this.setState({location: e.target.value})
  }

  handleSearch(e){
    this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
    e.preventDefault();

  }

  handleSortByChange(sortByOption){
      this.setState({sortBy:sortByOption})
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li
                key={sortByOptionValue}
                className={this.getSortByClass(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this,sortByOptionValue)}
               >{sortByOption}</li>
    })
    // key es el identificador unico que pide React para componentes hijos
  }
  // [bestMatch,hightestRated,mostReviewed].map(elemt => 
  // let value=sortByOptions[elemt] )
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input 
          placeholder="Search Businesses"
          onChange={this.handleTermsChange}
           />
          <input
           placeholder="Where?"
           onChange={this.handleLocationChange}
            />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}