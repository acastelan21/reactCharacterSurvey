import {UPDATE_ANSWERKEYV2} from "../actions/answerKeyV2-actions";

export default function answerKeyV2 (state ="",
     {type, payload}) {
        switch(type){
            case UPDATE_ANSWERKEYV2:
                return payload.answerKeyV2;
            default:
            return state;
        }
        
        
    }