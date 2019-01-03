import React, {Component} from "react";
import  "./SuccessModal.scss"
export default class SuccessModal extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={"status-modal"}>
                <img src={`${process.env.PUBLIC_URL}/imgs/Fill.svg`}
                     alt="success"/>
                <p>{this.props.statusModalText}</p>
            </div>
        )
    }
}