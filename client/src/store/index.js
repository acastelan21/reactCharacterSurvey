import {createStore} from "redux";

const initialState = {
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

function saveToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("state", serializedState)
    } catch(e){
        console.log(e)
    }
}
function loadFromLocalStorage(){
    try {
        const serializedState =localStorage.getItem('state')
        if(serializedState === null) return undefined 
        return JSON.parse(serializedState)
    } catch(e){
        console.log(e)
        return undefined
    }
}

const reducer =( state = initialState, action) => {
console.log("reducer", action);
    switch(action.type){
        case "CHANGE_ANSWER":
            
            return Object.assign( {}, state, {[action.questionNumber] : action.answer})
            
        case "ADD_ITEM":
            return Object.assign({}, state, {answers: state.answers.concat(state.q1)});
        default:
        return state;
    }

}
const persistedState = loadFromLocalStorage()
const store = createStore(reducer, persistedState);
store.subscribe(()=> saveToLocalStorage(store.getState()))

export default store; 