import React, {Component} from "react"
import "./alertDom.scss"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
let alertRef = null;
export default class AlertDom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftData: 0,
        }
    }

    componentDidMount() {
        let [allWidth, domWidth] = [document.body.offsetWidth, alertRef.offsetWidth];
        let resultWidth = allWidth / 2 - domWidth / 2;
        this.setState({
            leftData: `${resultWidth}px`
        });
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <div ref={(alert) => {
                    alertRef = alert
                }} className={"alert-warp"} style={{left: this.state.leftData}}>
                    {this.props.alertText}
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}