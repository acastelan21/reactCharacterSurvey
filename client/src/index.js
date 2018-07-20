import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore} from "redux";

import {Provider} from "react-redux";
import answerKeyReducer from "./reducers/answerKey-reducer";
import answerKeyV2Reducer from "./reducers/answerKeyV2-reducer";


const allReducers = combineReducers({
  answerKey: answerKeyReducer,
  answerKeyV2:answerKeyV2Reducer
});
const store = createStore(
  allReducers,{
    answerKey: [{q1:"a"}],
    answerKeyV2: "question1"
    
  },
  window.devToolsExtension && window.devToolsExtension()
);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
