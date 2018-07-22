import React from "react"; 
import {connect} from "react-redux";
import "./survey.css";


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
              value="a"
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
              value="b"
              onChange={props.handleChange}
            />
              B. Look for meaning and possibilities
          </label>
        </li>
      </ul>
      <ul className="q3">3.
        <li>
          <label>
            <input
                name="q3"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Logical, thinking, questioning 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q3"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Empathetic, feeling, accommodating
          </label>
        </li>

      </ul>
      <ul className="q4">4.
        <li>
          <label>
            <input
                name="q4"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Organized, orderly 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q4"
              type="radio"
              value="b"
             
              onChange={ props.handleChange}
            />
            B. Flexible, adaptable
          </label>
        </li>

      </ul>
      <ul className="q5">5.
        <li>
          <label>
            <input
                name="q5"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. More outgoing, think out loud 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q5"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. More reserved, think to yourself
          </label>
        </li>

      </ul>
      <ul className="q6">6.
        <li>
          <label>
            <input
                name="q6"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Practical, realistic, experiential 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q6"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Imaginative, innovative, theoretical
          </label>
        </li>

      </ul>
      <ul className="q7">7.
        <li>
          <label>
            <input
                name="q7"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Candid, straight forward, frank 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q7"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B.Tactful, kind, encouraging
          </label>
        </li>

      </ul>
      <ul className="q8">8.
        <li>
          <label>
            <input
                name="q8"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Plan, schedule 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q8"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Unplanned, spontaneous
          </label>
        </li>

      </ul>
      <ul className="q9">9.
        <li>
          <label>
            <input
                name="q9"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Seek many tasks, public activities, interaction with others
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q9"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Seek private, solitary activities with quiet to concentrate
          </label>
        </li>

      </ul>
      <ul className="q10">10.
        <li>
          <label>
            <input
                name="q10"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Standard, usual, conventional  
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q10"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Different, novel, unique
          </label>
        </li>

      </ul>
      <ul className="q11">11.
        <li>
          <label>
            <input
                name="q11"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Firm, tend to criticize, hold the line 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q11"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Gentle, tend to appreciate, conciliate
          </label>
        </li>

      </ul>
      <ul className="q12">12.
        <li>
          <label>
            <input
                name="q12"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Regulated, structured 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q12"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Easygoing, “live” and “let live”
          </label>
        </li>

      </ul>
      <ul className="q13">13.
        <li>
          <label>
            <input
                name="q13"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. External, communicative, express yourself 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q13"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Internal, reticent, keep to yourself
          </label>
        </li>

      </ul>
      <ul className="q14">14.
        <li>
          <label>
            <input
                name="q14"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Focus on here-and-now 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q14"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Look to the future, global perspective, “big picture”
          </label>
        </li>

      </ul>
      <ul className="q15">15.
        <li>
          <label>
            <input
                name="q15"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Tough-minded, just
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q15"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Tender-hearted, merciful
          </label>
        </li>

      </ul>
      <ul className="q16">16.
        <li>
          <label>
            <input
                name="q16"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Preparation, plan ahead  
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q16"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Go with the flow, adapt as you go
          </label>
        </li>

      </ul>
      <ul className="q17">17.
        <li>
          <label>
            <input
                name="q17"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Active, initiate  
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q17"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Reflective, deliberate
          </label>
        </li>

      </ul>
      <ul className="q18">18.
        <li>
          <label>
            <input
                name="q18"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Facts, things, “what is”  
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q18"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Ideas, dreams, “what could be,” philosophical
          </label>
        </li>

      </ul>
      <ul className="q19">19.
        <li>
          <label>
            <input
                name="q19"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Matter of fact, issue-oriented 
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q19"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Sensitive, people-oriented, compassionate
          </label>
        </li>

      </ul>
      <ul className="q20">20.
        <li>
          <label>
            <input
                name="q20"
                type="radio"
                value="a"
                
                onChange={ props.handleChange}
            />
            A. Control, govern  
          </label>
        </li>
        
        <li>
          <label>
            <input
            name="q20"
              type="radio"
              value="b"
              
              onChange={ props.handleChange}
            />
            B. Latitude, freedom
          </label>
        </li>

      </ul>
      <a href="/survey/results" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">See Results</a>
    </form>




</div>

);}


function mapDispatchToProps(dispatch){
  return{
    handleChange:(event)=>{
    console.log("change", event.target.value);
     const action ={type:"CHANGE_ANSWER", answer: event.target.value , questionNumber: event.target.name};
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