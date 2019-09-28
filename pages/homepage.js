import React, { Component } from "react";

import Header from "./../src/components/header/header";
import SearchBar from "./../src/components/search-bar/searchBar";
import "./styles.css";

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Homepage;
