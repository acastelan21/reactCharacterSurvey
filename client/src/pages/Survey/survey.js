import React, {Component} from "react"; 
import "./survey.css"
class Survey extends Component {
    constructor(){
        super();
        this.state={
            q1:"",
            q2:"",
            q3:"",
            q4:"",
            q5:"",
            q6:"",
            q7:"",
            q8:"",
            q9:"",
            q10:"",
            q11:"",
            q12:"",
            q13:"",
            q14:"",
            q15:"",
            q16:"",
            q17:"",
            q18:"",
            q19:"",
            q20:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
          [event.target.name]: event.target.value
        });
       
      }
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
      }
render(){
    
return(

<div className="survey"> 


<form onSubmit={this.handleSubmit}>
      <h2>Choose the answer that you think most accurately describes you.</h2>
      
      <ul className="q1">1.
        <li>
          <label>
            <input
                name="q1"
                type="radio"
                value="a"
                checked={this.state.q1 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q1 === "b"}
              onChange={this.handleChange}
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
              checked={this.state.q2 === "a"}
              onChange={this.handleChange}
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
              checked={this.state.q2=== "b"}
              onChange={this.handleChange}
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
                checked={this.state.q3 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q3 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q4 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q4 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q5 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q5 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q6 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q6 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q7 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q7 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q8 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q8 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q9 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q9 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q10 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q10 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q11 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q11 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q12 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q12 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q13 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q13 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q14 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q14 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q15 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q15 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q16 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q16 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q17 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q17 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q18 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q18 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q19 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q19 === "b"}
              onChange={this.handleChange}
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
                checked={this.state.q20 === "a"}
                onChange={this.handleChange}
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
              checked={this.state.q20 === "b"}
              onChange={this.handleChange}
            />
            B. Latitude, freedom
          </label>
        </li>

      </ul>

      <button type="submit">See Results</button>
    </form>




</div>

)

}


}
export default Survey; 