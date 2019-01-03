import React, {Component} from "react"
import "./numList.scss"
import connect from "./../../../containers/index"

@connect
export default class NumList extends Component {

    render() {
        var newArr = [];
        for (let index in this.props.NumArr) {
            if (this.props.NumArr[+index].my_answer) {
                 newArr.push(
                    <li key={this.props.NumArr[+index].question_id} className={`float-left`}
                        onClick={this.props.numFun.bind(this, +index)}>
                        {+index + 1}
                    </li>
                )
            } else {
                 newArr.push(
                    <li key={this.props.NumArr[+index].question_id} className={`float-left not-answered`}>
                        {+index + 1}
                    </li>
                )
            }
        }

        return (
            <div>
                <ul className={`num-list clearfix`}>
                    {
                        newArr
                    }
                </ul>
            </div>
        )
    }
}