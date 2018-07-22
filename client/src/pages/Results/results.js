import React from "react"; 
import {connect} from "react-redux";
const Results = (props) => {
//answers to load based on this 
let finalResult = ""
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
    q1:props.results.q1,
    q5:props.results.q5,
    q9:props.results.q9,
    q13:props.results.q13,
    q17:props.results.q17
    }; 
let snList ={
    q2:props.results.q2,
    q6:props.results.q6,
    q10:props.results.q10,
    q14:props.results.q14,
    q18:props.results.q18
}
let tfList ={
    q3:props.results.q3,
    q7:props.results.q7,
    q11:props.results.q11,
    q15:props.results.q12,
    q19:props.results.q19
}
let jpList ={
    q4:props.results.q4,
    q8:props.results.q8,
    q12:props.results.q12,
    q16:props.results.q16,
    q20:props.results.q20
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
    finalResult = finalResult + "e"
}
else{finalResult =finalResult + "i"}


if (sCount>nCount){
    finalResult = finalResult + "s"
}
else{finalResult =finalResult + "n"}

if (tCount>fCount){
    finalResult = finalResult + "t"
}
else{finalResult =finalResult + "f"}

if (jCount>pCount){
    finalResult = finalResult + "j"
}
else{finalResult =finalResult + "p"}
console.log("final results", finalResult)

return(


<div> {finalResult}</div>


);
}
function mapStateToProps (state) {
    console.log("state in results", state)
    return {
        results: state
        
    };
}
export default connect(mapStateToProps)(Results); 