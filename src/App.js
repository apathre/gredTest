import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./../pages/homepage";
import Stock from "./../pages/stockPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/stock/:id" component={Stock} />
      </Switch>
    );
  }
}

export default App;
