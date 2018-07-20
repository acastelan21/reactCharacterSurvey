import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import {Router, Route} from "react-router-dom";
import history from "./history";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from "./pages/Results";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


class App extends Component {
  
  render() {
    console.log(this.props);
    return (
      
        <Wrapper>
          <NavBar/>
        
          
          <Router history={history}>
            <div >
              <Route exact path = "/" component={Home}/>
              <Route exact path = "/survey" component={Survey}/>
              <Route path = "/survey/results" component={Results}/>
            </div>
          </Router>
          <Footer/>
        </Wrapper>
      
    );
  }
}


export default App;
