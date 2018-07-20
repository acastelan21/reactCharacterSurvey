export const UPDATE_ANSWERKEYV2 = "answerKeyV2:updateAnswerKeyV2";
export function updateAnswerKeyV2(newAnswerKeyV2) {
    return{
        type:UPDATE_ANSWERKEYV2,
        payload:{
            answerKeyV2 : newAnswerKeyV2
        }
    }
}