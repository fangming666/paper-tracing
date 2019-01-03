import React, {Component} from "react"
import hoc from "./hoc"
import connect from "./../../containers/index"
import Grade from "./../exam_list/grade/grade"
import SuccessModal from "./../hint/successModal/SuccessModal"
import "./pay.scss"
import AlertDom from "../hint/alertDom/alertDom";

@connect
@hoc
export default class Pay extends Component {
    render() {
        return (
            <div className={"pay-warp"}>
                {this.props.state.alertText ? <AlertDom alertText={this.props.state.alertText}>
                </AlertDom> : ""}
                {this.props.state.statusModalText ? <SuccessModal statusModalText={this.props.state.statusModalText}>
                </SuccessModal> : ""}
                <dl>
                    <dt>
                        选择年级
                    </dt>
                    <dd className={"pay-grade"}>
                        <Grade parentExam={this.props.getPay}>
                        </Grade>
                    </dd>
                </dl>
                <dl>
                    <dt>选择支付时间</dt>
                    <dd>
                        {this.props.payDom(this.props.paper.goodsList)}
                    </dd>
                </dl>
            </div>
        )
    }
}