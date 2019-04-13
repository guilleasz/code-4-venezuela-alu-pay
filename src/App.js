import React, { Component } from "react";
import AppRouter from "./AppRouter";
class App extends Component {

  render() {
    return <AppRouter />;
  }

  login = () => {
    console.log("Login");
  };
}

export default App;
