import React, { Component } from "react";
import { connect } from 'react-redux'
import AppRouter from "./AppRouter";
import { authenticate } from "./redux/actions/authentication";

class App extends Component {

  componentDidMount() {
    this.props.authenticate()
  }

  render() {
    return <AppRouter />;
  }

}

export default connect(null, { authenticate })(App);
