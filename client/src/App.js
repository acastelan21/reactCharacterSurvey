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
import {connect} from "react-redux"; 
import {updateAnswerKeyV2} from "./actions/answerKeyV2-actions";
class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateAnswerKeyV2=this.onUpdateAnswerKeyV2.bind(this); 

  }
  onUpdateAnswerKeyV2(event){
    this.props.onUpdateAnswerKeyV2(event.target.value);
  }
  render() {
    console.log(this.props);
    return (
      
        <Wrapper>
          <NavBar/>
          <input onChange={this.onUpdateAnswerKeyV2}/>
          <div>{this.props.answerKeyV2}</div>
          
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
const mapStateToProps = state =>({
  answerKey: state.answerKey,
  answerKeyV2: state.answerKeyV2
});
const mapActionsToProps = {
  onUpdateAnswerKeyV2 :updateAnswerKeyV2
};
export default connect(mapStateToProps,mapActionsToProps) (App);
