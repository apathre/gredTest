import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShowStock from "./../src/components/body/showStock";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      stockArray: []
    };
  }
  componentDidMount() {
    var arr = [];
    var sym = this.props.match.params.id;
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${sym}&apikey=XRKJ74TU6IIBBN4Y`
    )
      .then(response => response.json())
      .then(data => {
        for (var k in data["Meta Data"]) {
          arr.push({ [k]: data["Meta Data"][k] });
        }
        this.setState({
          isLoaded: true,
          stockArray: arr
        });
      })
      .catch(err => {
        console.log("error:", err);
      });
  }

  render() {
    const { isLoaded, stockArray } = this.state;
    return (
      <div>
        <h4>Data is:</h4>
        {isLoaded ? (
          <ShowStock stockDetail={stockArray} />
        ) : (
          <span>Loading...</span>
        )}
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

export default Stock;
