import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers';
import Home from './components/home/home'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
