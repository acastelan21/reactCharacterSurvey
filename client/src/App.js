import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
class App extends Component {
  getGetRequest(){
   
    axios.get("/api/database").then(res => {
     console.log(res); 
       	   })
    	 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={this.getGetRequest}>
          GET TEST
          </button>
        </div>
      </div>
    );
  }
}

export default App;
