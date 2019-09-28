import React, { Component } from "react";
import SearchResults from "./../body/searchResults";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchArray: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }
  handleSubmit(e) {
    var query = this.state.searchText;
    var arr = [];

    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=XRKJ74TU6IIBBN4Y`
    )
      .then(response => response.json())
      .then(json => {
        for (var i = 0; i < json.bestMatches.length; i++) {
          var res = {
            sym: json.bestMatches[i]["1. symbol"],
            name: json.bestMatches[i]["2. name"],
            type: json.bestMatches[i]["3. type"],
            region: json.bestMatches[i]["4. region"]
          };
          arr.push(res);
        }
        this.setState({
          searchArray: arr,
          searchText: ""
        });
      })
      .catch(error => {
        console.log("error:", error);
      });
    e.preventDefault();
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchText}
            onChange={this.handleChange}
            name="search-text"
          />
          <input type="submit" name="submit-button" />
        </form>
        <SearchResults query={this.state.searchArray} />
      </div>
    );
  }
}

export default SearchBar;
