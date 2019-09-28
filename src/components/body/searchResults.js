import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(sym) {
    console.log("sym", sym);
  }
  render() {
    return (
      <div>
        <p>Search Results</p>
        <table>
          <tbody>
            {this.props.query.map(items => {
              return (
                <div>
                  <tr
                    key={items.sym + items.name}
                    onClick={() => this.handleClick(items.sym)}
                  >
                    <Link to={`/stock/${items.sym}`}>
                      <td>{items.sym}</td>
                    </Link>
                    <td>{items.name}</td>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResults;
