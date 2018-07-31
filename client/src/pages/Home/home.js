import React, {Component} from "react"; 

import "./home.css";
class Home extends Component {
    

render(){
return(

<div className="pageContainer">
    <div className="jumbotron">
    <h1 className="display-4">Which character from "The Office and/or "Parks and Rec" are you most like?</h1>
    <p className="lead">Click "Take Survey" below and find out! </p>
    <hr className="my-4"/>
    <div className="row justify-content-center">
    <div className="col-md-auto">
    <img src={require("../../images/theoffice2.jpg")} alt="the office poster"/>
    </div>
    <div className="col-md-auto"><a className="btn btn-primary btn-lg" href="/survey" role="button">Take Survey</a></div>
    <div className="col-md-auto"><img src={require("../../images/parksandrec2.jpg") } alt ="parks and rec poster"/></div>
   
    
    </div>
    
</div>
</div>













)

}


}
export default Home; 