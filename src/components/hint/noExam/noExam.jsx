import React, {Component} from "react"
import "./noExam.scss"
export default class NoExam extends Component {

    render() {
        return (
            <div className={"no-exam"}>
                <img src={`${process.env.PUBLIC_URL}/imgs/no-exam@1x.png`}
                     srcSet={`${process.env.PUBLIC_URL}/imgs/no-exam@2x.png 2x ,${process.env.PUBLIC_URL}/imgs/no-exam@3x.png 3x`}
                     alt="no-exam"/>
                <p>暂无试题</p>

            </div>
        )
    }
}