import React, { Component } from "react";
import {connect} from "react-redux";
import axios from "axios";

class Results extends Component{
    constructor(props){
        super(props);
        this.state={
            allData: props.results,
            officeCharacter: " ",
            officeGif:"", 
            parksAndRecCharacter:"",
            parksAndRecGif:""

        }
    }

    componentWillMount(){
       //answers to load based on this 
let finalResult = "";
//letter counter
  let eCount = 0;
  let iCount = 0;
  let sCount = 0;
  let nCount = 0;
  let tCount = 0;
  let fCount = 0;
  let jCount = 0;
  let pCount = 0;
//new object with letter specific questions and answers
let eiList = {
  q1: this.state.allData.q1,
  q5: this.state.allData.q5,
  q9: this.state.allData.q9,
  q13: this.state.allData.q13,
  q17: this.state.allData.q17
  }; 
let snList ={
  q2: this.state.allData.q2,
  q6: this.state.allData.q6,
  q10: this.state.allData.q10,
  q14: this.state.allData.q14,
  q18: this.state.allData.q18
}
let tfList ={
  q3: this.state.allData.q3,
  q7: this.state.allData.q7,
  q11: this.state.allData.q11,
  q15: this.state.allData.q12,
  q19: this.state.allData.q19
}
let jpList ={
  q4: this.state.allData.q4,
  q8: this.state.allData.q8,
  q12: this.state.allData.q12,
  q16: this.state.allData.q16,
  q20: this.state.allData.q20
}
// e/i letter check
console.log("eilist",eiList)

for (const ans in eiList ){
  if(eiList[ans]==="a"){
  eCount++
  
}

else {iCount++};

console.log("eCount", eCount, "iCount", iCount)

}


// s/n letter check
console.log("snlist",snList)

for (const ans in snList ){
  if(snList[ans]==="a"){
  sCount++
  
}

else {nCount++};
console.log("sCount", sCount, "nCount", nCount)
}

// t/f letter check
console.log("tflist",tfList)

for (const ans in tfList ){
  if(tfList[ans]==="a"){
  tCount++
  
}

else {fCount++};
console.log("tCount", tCount, "fCount", fCount)
}
// j/p letter check
console.log("jplist",jpList)

for (const ans in jpList ){
  if(jpList[ans]==="a"){
  jCount++
  
}

else {pCount++};
console.log("jCount", jCount, "pCount", pCount)
}

//put together final result 

if (eCount>iCount){
  finalResult = finalResult + "E"
}
else{finalResult =finalResult + "I"}


if (sCount>nCount){
  finalResult = finalResult + "S"
}
else{finalResult =finalResult + "N"}

if (tCount>fCount){
  finalResult = finalResult + "T"
}
else{finalResult =finalResult + "F"}

if (jCount>pCount){
  finalResult = finalResult + "J"
}
else{finalResult =finalResult + "P"};
console.log("final results", finalResult);

    axios.get("/api/database").then(res=>{
        console.log("res.data", res.data)
        const data = res.data;
        for(const type in data){
            if(data[type].persType === finalResult && data[type].tvShow ==="The Office"){
                console.log("true",data[type].character)
               const resultsOfficeCharacter = (data[type].character)
               console.log(data[type].gif);
               this.setState({officeCharacter:resultsOfficeCharacter, officeGif: data[type].gif})
                console.log("office character", resultsOfficeCharacter);
            }
            if(data[type].persType === finalResult && data[type].tvShow==="Parks and Rec"){
                const resultsParksRecCharacter = (data[type].character)
                this.setState({parksAndRecCharacter:resultsParksRecCharacter, parksAndRecGif: data[type].gif})
                console.log("parks and rec", resultsParksRecCharacter)
            }
        }
    
        console.log("finalResult in axios call", finalResult )
        
    })



    }//holder for will mount
        




    render(){
        console.log(this.state)
    return(

 
<div className="resultsPage">

<h3>You are most like ...</h3>
<div className ="row justify-content-center">
<div className="col-4">
<div id="theOfficeResult" className="card" style={{width: 18 + "rem"}}>

  <img className="card-img-top" src={this.state.officeGif} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">{this.state.officeCharacter}</p>
</div>
</div>
</div>
<div className="col-4">
<div id="parksAndRecResult" className="card" style={{width: 18 + "rem"}} >

  <img className="card-img-top" src={this.state.parksAndRecGif} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">{this.state.parksAndRecCharacter}</p>
</div>
</div>
</div>
</div>

 </div>

        )
    }
}
function mapStateToProps (state){
    console.log("State in results", state)
    return {
        results:state
    }
}
export default connect(mapStateToProps) (Results); 
