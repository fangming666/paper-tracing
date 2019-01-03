import React, {Component} from "react"
import hoc from "./hoc"
import connect from '../../../containers/index';
import "./grade.scss"
@connect
@hoc
export default class Grade extends Component {
    render() {
        return (
            <div className="grade">
                {this.props.gradeDom(this.props.paper.gradeList)}
            </div>
        )
    }
}

