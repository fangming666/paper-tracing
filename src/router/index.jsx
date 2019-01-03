import React from "react"
import {BrowserRouter, Switch} from "react-router-dom"
import CenterRoute from "./CenterRoute"
import ExamList from "./../components/exam_list/exam_list";
import Test from "./../components/test";
import Pay from "./../components/pay/pay"
import Question from "./../components/question/question"
import Report from "./../components/report/report"


export default class App extends React.Component {


    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <CenterRoute path="/report" component={Report} title="分析报告"/>
                        <CenterRoute path="/question" component={Question} title="题目"/>
                        <CenterRoute path="/pay" component={Pay} title="支付"/>
                        <CenterRoute path="/test" component={Test} title="测试"/>
                        <CenterRoute path="/" component={ExamList} title="考试列表"/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
};
