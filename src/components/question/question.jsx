import React, {Component} from "react"
import connect from "./../../containers/index";
import hoc from "./hoc"
import "./question.scss"
import AlertDom from "./../hint/alertDom/alertDom"

@connect
@hoc
export default class Question extends Component {
    render() {
        let [resultDom, alertDom] = ["", ""];
        if (this.props.state.subAllSwitch) {
            resultDom = (this.props.subAllDom())
        } else {
            resultDom = (
                <React.Fragment>
                    <div className={`question-title clearfix`}>
                    <span className={`question-title-name float-left`}>
                        {this.props.state.chapterName}
                    </span>
                        <p className={`float-right`}>
                            <span>{this.props.state.nowNum}</span>&nbsp;/&nbsp;<span>{this.props.state.allNum}</span>
                        </p>
                    </div>
                    <p className={"buffering"}>
                    </p>
                    <div className={"question-content"}>
                        <div className={"question-content-rubric"}
                             dangerouslySetInnerHTML={{__html: this.props.state.questionContent.question_content}}>
                        </div>
                        {
                            this.props.state.questionContent && this.props.state.questionContent.answers.map((item) => {
                                return (
                                    <dl className={`answer clearfix ${item.option === this.props.state.questionContent.my_answer ? 'answer-active' : ''}`}
                                        key={item.option}
                                        onClick={this.props.answerSub.bind(this, item.option, this.props.state.questionContent.question_id)}>
                                        <dt className={"float-left"}>
                                            {item.option}
                                        </dt>
                                        <dd className={"float-left"}>
                                            <div dangerouslySetInnerHTML={{__html: item.content}}>
                                            </div>
                                        </dd>
                                    </dl>
                                )

                            })
                        }
                        <dl>

                        </dl>
                    </div>
                    {this.props.reviseWindow()}
                </React.Fragment>
            )
        }
        if (this.props.state.alertText) {
            alertDom = (
                <AlertDom alertText={this.props.state.alertText}>
                </AlertDom>
            )
        } else {
            alertDom = ""
        }
        return (
            <div className={"question"}>
                {this.props.errModalDom()}
                {resultDom}
                {alertDom}
                {this.props.SuccessModalDom()}
            </div>
        )
    }
}