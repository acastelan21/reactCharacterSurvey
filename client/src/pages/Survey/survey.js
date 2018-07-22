import React from "react"; 
import {connect} from "react-redux";
import "./survey.css";
import {Link} from "react-router-dom";

const Survey = (props) => {
console.log("render", props)


return (

<div className="survey"> 


<form onSubmit={props.handleSubmit}>
      <h2>Choose the answer that you think most accurately describes you.</h2>
      
      <ul className="q1">1.
        <li>
          <label>
            <input
                name="q1"
                type="radio"
                value="a"
                onChange={props.handleChange}
            />
            A. Expend energy, enjoy groups 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q1"
              type="radio"
              value="b"
              onChange={props.handleChange}
            />
            B. Conserve energy, enjoy one-on-one
          </label>
        </li>

      </ul>
      <ul className="q2">2.
        <li>
          <label>
            <input
                name="q2"
              type="radio"
              value="1"
              onChange={props.handleChange}
            />
             A. Interpret literally 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q2"
              type="radio"
              value="2"
              onChange={props.handleChange}
            />
              B. Look for meaning and possibilities
          </label>
        </li>
      </ul>
      <input type="submit" value="submit"/>
    </form>

<Link to={"/survey/results"}> Go to Results </Link>


</div>

);}


function mapDispatchToProps(dispatch){
  return{
    handleChange:(event)=>{
    console.log("change", event.target.value);
     const action ={type:"CHANGE_ANSWER", answer: event.target.value , target: event.target.name};
     dispatch(action);
    },
    handleSubmit: (event) => {
      event.preventDefault();
      console.log("submit");
      
      const action ={ type: "ADD_ITEM"};
      dispatch(action);
    }
    
  }
}
function mapStateToProps (state){
  console.log("mapstatetoprops", state)
  return{
   
    q1: state.q1,
    // answers: state.answers

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Survey); 