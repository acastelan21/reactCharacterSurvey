import React from "react"; 
import {connect} from "react-redux";
const Results = (props) => {
  
    console.log("props", props)
return(


<div> 
{props.results}
  </div>


);
}
function mapStateToProps (state) {
    console.log("state in results", state)
    return {
        results: state.q1
    };
}
export default connect(mapStateToProps)(Results); 