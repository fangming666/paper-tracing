import React, {Component} from "react"
import hoc from "./hoc"
import "./exam_list.scss"
import Grade from "./grade/grade"
import NoExam from "../hint/noExam/noExam"
import AlertDom from "../hint/alertDom/alertDom"
import connect from './../../containers/index';

@connect
@hoc
export default class ExamList extends Component {

    render() {
        let examContent;
        if (this.props.paper.examList.length) {
            examContent = (this.props.paper.examList.map(examItem => {
                return (
                    <div key={examItem.create_date}>
                        <div className="exam-time">
                            {this.props.timeFilter(examItem.create_date)}
                        </div>
                        <div className="exam-list">
                            {this.props.examListDom(examItem.list)}
                        </div>
                    </div>
                )
            }))
        } else {
            examContent = (
                <NoExam>
                </NoExam>)
        }
        return (
            <React.Fragment>
                <div className="exam-warp">
                    {this.props.vipDay(this.props.paper.vip_last_day)}
                    {this.props.state.issue ? <AlertDom alertText={this.props.state.alertText}/> : ""}
                    <Grade parentExam={this.props.parentExam}>
                    </Grade>
                    <div className={`exam ${this.props.paper.examList.length ? '' : 'bg-white'}`}>
                        {
                            examContent
                        }
                    </div>
                    <button onClick={this.props.testClick}>click ME</button>

                </div>
            </React.Fragment>
        )
    }
}



