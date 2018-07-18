import React, {Component} from "react"; 
import API from "../../utils/API";
import "./home.css";
class Home extends Component {
    

render(){
return(

<div className="pageContainer">
    <div className="jumbotron">
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">Which character from "The Office and/or "Parks and Rec" are you most like? </p>
    <hr className="my-4"/>
    <p>Click "Take Survey" below and find out!</p>
    <a className="btn btn-primary btn-lg" href="/survey" role="button">Take Survey</a>
    </div>

</div>













)

}


}
export default Home; 