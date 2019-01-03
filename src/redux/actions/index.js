import * as joggle from "../../utils/config";
import * as Server from "../../utils/axios";

export const GAIN_EXAM = "GAIN_EXAM";
export const GAIN_GRADE = "GAIN_GRADE";
export const CHANGE_GRADE = "CHANGE_GRADE";
export const FAIL = "FAIL";
export const SUCCESS_GOODS = "SUCCESS_GOODS";
export const SUCCESS_ORDER = "SUCCESS_ORDER";
export const SUCCESS_QUESTION = "SUCCESS_QUESTION";
export const CHANGE_LOADING_TEXT = "CHANGE_LOADING_TEXT";
export const CHANGE_QUESTION = "CHANGE_QUESTION";
export const TEST_CHANGE = "TEST_CHANGE";

export function test_change() {
    return{
        type:TEST_CHANGE
    }
}

export function gain_exam(data) {
    return {
        type: GAIN_EXAM,
        result: data
    }
}

export function gain_grade(data) {
    return {
        type: GAIN_GRADE,
        result: data
    }
}

export function change_grade(index) {
    return {
        type: CHANGE_GRADE,
        index
    }
}

function fail_fun(result) {
    return {
        type: FAIL,
        result
    }
}

function suc_goods(data) {
    return {
        type: SUCCESS_GOODS,
        data
    }
}

export function get_goods() {
    return async dispatch => {
        try {
            let page = {};
            let result = await Server._askAxios(page, joggle.GRADE_GOODS);
            dispatch(suc_goods(result.data.data));
            dispatch(fail_fun(false))
        } catch (e) {
            dispatch(fail_fun(true))
        }
    }
}

function suc_order(obj) {
    return {
        type: SUCCESS_ORDER,
        obj
    }
}

export function gain_order(...result) {
    return async dispatch => {
        try {
            let page = {good_id: result[0], grade: result[1]};
            let resultData = await Server._askAxios(page, joggle.ORDER_CREATE);
            dispatch(suc_order(resultData.data.data));
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

function suc_question(arr) {
    return {
        type: SUCCESS_QUESTION,
        arr
    }
}

export function gain_question(paper_id) {
    return async dispatch => {
        try {
            let page = {paper_id: paper_id};
            let resultData = await Server._askAxios(page, joggle.PAPER_QUEATION);
            dispatch(suc_question(resultData.data.data))
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

export function finish_question(...result) {
    return async () => {
        try {
            let page = {data: {paper_id: result[0], question_id: result[1], option: result[2]}};
            await Server._askAxios(page, joggle.PAPER_FINISH)
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

export function finish_all(result) {
    return async () => {
        try {
            let page = {data: {paper_id: result}};
            await Server._askAxios(page, joggle.FINISH_ALL)
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

export function change_loading_text(text) {
    return {
        type: CHANGE_LOADING_TEXT,
        text
    }
}

export function change_question(...result) {
    return {
        type: CHANGE_QUESTION,
        result
    }
}