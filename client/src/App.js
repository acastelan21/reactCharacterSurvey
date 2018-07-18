import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Wrapper from "./components/Wrapper";
import {Router, Route} from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from "./pages/Results";


class App extends Component {
  // getGetRequest(){
   
  //   axios.get("/api/database").then(res => {
  //    console.log(res); 
  //      	   })
  //   	 }
  render() {
    return (
      <Wrapper>
        <Router history={history}>
          <div>
            <Route exact path = "/" component={Home}/>
            <Route exact path = "/survey" component={Survey}/>
            <Route path = "/survey/results" component={Results}/>
          </div>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
