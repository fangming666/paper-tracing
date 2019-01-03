import {
    GAIN_EXAM,
    GAIN_GRADE,
    CHANGE_GRADE,
    SUCCESS_GOODS,
    FAIL,
    SUCCESS_ORDER,
    SUCCESS_QUESTION,
    CHANGE_LOADING_TEXT,
    CHANGE_QUESTION,
    TEST_CHANGE
} from "../actions/index";

const initialState = {
    examList: [],
    gradeList: [],
    goodsList: [],
    questionList: [],
    gradeIndex: "",
    vip_last_day: "",
    failSwitch: false,
    payObj: {},
    loadText: "加载中",
    testNum: 0
};

// function updateExamList(list) {
//     return list.find(exam => {
//         return exam.grade === initialState.grade
//     })
// }
function changeQuestionFun(...result) {
    return initialState.questionList.map((item, index) => {
        if (index === result[1]) {
            item.my_answer = result[0]
        }
    })
}

export default function paper(state = initialState, action) {
    let {type} = action;
    switch (type) {
        case TEST_CHANGE:
            return {
                ...state,
                testNum: state.testNum + 1
            };
        case GAIN_EXAM:
            return {
                ...state,
                examList: action.result.data,
                vip_last_day: action.result.vip_last_day,
            };
        case GAIN_GRADE:
            return {
                ...state,
                gradeList: action.result.data,
            };
        case CHANGE_GRADE:
            return {
                ...state,
                gradeIndex: action.index
            };
        case SUCCESS_GOODS:
            return {
                ...state,
                goodsList: action.data
            };
        case FAIL:
            return {
                ...state,
                failSwitch: action.result
            };
        case SUCCESS_ORDER:
            return {
                ...state,
                payObj: action.obj
            };
        case SUCCESS_QUESTION:
            return {
                ...state,
                questionList: action.arr
            };
        case CHANGE_LOADING_TEXT:
            return {
                ...state,
                loadText: action.text
            };
        case CHANGE_QUESTION:
            console.log(action.result);
            return {
                ...state,
                loadText: changeQuestionFun(action.result)
            };
        default:
            return state;
    }
}