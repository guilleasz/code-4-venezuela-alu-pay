import React, { Component } from 'react';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <Dashboard/>
      </div>
    );
  }
}

export default App;
