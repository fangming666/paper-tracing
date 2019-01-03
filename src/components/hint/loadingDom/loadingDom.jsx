import React, {Component} from "react";
import connect from "../../../containers/index"
import "./loadingDom.scss";

@connect
export default class LoadingDom extends Component {
    render() {
        return (
            <div className="loadingDom">
                <i className={`fa fa-spin fa-spinner`}>
                </i>
                <p>{this.props.paper.loadText}</p>
            </div>
        )
    }
}