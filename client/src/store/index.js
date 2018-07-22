import {createStore} from "redux";

const initialState = {
    q1: "" ,
    q2:"",
    
    
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
            console.log("target name in store", action.target)
            return Object.assign( {}, state, {[action.target] : action.answer})
            
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