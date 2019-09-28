import React, { Component } from "react";

class ShowStock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.show = this.show.bind(this);
  }

  show() {
    var arr = this.props.stockDetail;
    var oKey = [];
    for (var i in arr) {
      console.log("item:", arr[i]);
      var keys = Object.keys(arr[i]);
      oKey.push(keys);
      console.log("keys:", oKey);
    }
  }
  render() {
    return (
      <div>
        <p>Hello from Show Stock!!</p>
        <p onLoad={this.show()} />
      </div>
    );
  }
}

export default ShowStock;
