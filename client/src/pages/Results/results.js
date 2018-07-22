import React from "react"; 

import {connect} from "react-redux";
const Results = (props) => {


return(
<div className="surveyPage"> 


</div>
);
}
function mapStateToProps (state) {
    console.log("state in results", state)
    return {
        results: state
    };
}
export default connect(mapStateToProps)(Results); 