import React, {Component} from "react"
import "./err.scss"

export default class Err extends Component {
    constructor(props) {
        super(props);
        this.state ={
            result:false
        }
    }
    freshen(){
        console.log("xxx");
        window.location.reload(true);
        this.setState({
            result:!this.state.result
        })
    }

    render() {
        return(
            <div className={"err"} >
                <p>网络请求超时，请刷新重试！</p>
                <a onClick={this.freshen.bind(this)}>
                    <i className={`fa fa-undo`}>
                    </i>刷新</a>
            </div>
        )
    }
}