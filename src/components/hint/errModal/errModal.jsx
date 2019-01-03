import React, {Component} from "react"
import "./errModal.scss"

export default class ErrModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"err-modal-warp"}>
                <div className={"err-modal"}>
                    <p>
                        {this.props.errModalText}
                    </p>
                    <div>
                    <span onClick={this.props.errLeave.bind(this)}>
                        离开
                    </span>
                        <span onClick={this.props.errSub.bind(this)}>
                        再次提交
                    </span>
                    </div>
                </div>
            </div>
        )
    }
}