import React, {Component} from "react"
import ErrModal from "./../hint/errModal/errModal"
import NumList from "./numList/numList"
import SuccessModal from "./../hint/successModal/SuccessModal"

const getDisplayName = component => component.displayName || component.name || "Component";


const hoc = WrappedComponent => {
    return class extends Component {
        static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

        // 构造
        constructor(props) {
            super(props);
            this.state = {
                chapterName: this.props.location.state.chapter_name,
                paperId: this.props.location.state.paper_id,
                questionId: "",
                errModalText: "",
                allNum: 0,
                nowNum: 1,
                questionContent: "",
                finishParameter: "",
                subAllSwitch: false,
                subSign: false,
                statusModalText: "",
                windowSwitch: true,
                alertText: "",
                subitemSwitch: false
            }
        }


        componentDidMount() {
            setTimeout(() => {
                document.title = this.props.location.state.name;
            }, 0);
            this.initQuestion();
        }

        //获得题目的内容
        async initQuestion() {
            let page = {data: {paper_id: this.props.location.state.paper_id}};
            await this.props.gain_question(page);
            console.log("questionList is", this.props.paper.questionList);
            this.setState({
                allNum: this.props.paper.questionList.length,
            });
            let resultItem = this.props.paper.questionList.find((item, index) => {
                if (!item.my_answer) {
                    this.setState({
                        nowNum: index + 1
                    });
                    return item;
                }
            });
            if (!resultItem) {
                this.setState({
                    questionContent: this.props.paper.questionList[0]
                })
            } else {
                this.setState({
                    questionContent: resultItem,
                })
            }
        }


        //单个题目的提交
        async answerSub(...result) {
            try {
                await this.props.finish_question(this.state.paperId, result[0], result[1]);
                this.setState({
                    errModalText: "",
                });
                if (!this.state.subSign) {
                    if (this.state.subitemSwitch) {
                        this.props.paper.questionList.find((item, index) => {
                            if (!item.my_answer) {
                                this.setState({
                                    nowNum: index + 1,
                                    alertText: this.state.subitemSwitch ? `回到第${index + 1}题，请继续答题` : ""
                                });
                                setTimeout(() => {
                                    this.setState({
                                        alertText: "",
                                        subitemSwitch: false
                                    })
                                }, 1000)
                            }
                        });
                    } else {
                        this.props.change_question(result[0], this.state.nowNum - 1);
                        this.setState({
                            nowNum: this.state.nowNum + 1,
                        });
                    }
                    this.carryQuestion();
                } else {
                    this.setState({
                        subAllSwitch: true
                    })
                }
            } catch (err) {
                this.setState({
                    finishParameter: result,
                    errModalText: err.messageCode ? "网络中断，提交失败" : err.data.message
                });
            }
        }

        //改变question
        carryQuestion() {
            if (this.state.nowNum < this.props.paper.questionList.length + 1) {
                let resultItem = this.props.paper.questionList[this.state.nowNum - 1];
                this.setState({
                    questionContent: resultItem,
                    subAllSwitch: false
                })
            } else {
                this.setState({
                    subAllSwitch: true,
                    subSign: true
                })
            }

        }


        //错误的modal离开的事件
        errLeave() {
            this.setState({
                errModalText: ""
            });
        }

        //错误modal的重新提交事件
        errSub() {
            this.state.subSign ? this.subAllAnswer() : this.answerSub(...this.state.finishParameter)
        }

        //错误的modal
        errModalDom() {
            if (this.state.errModalText) {
                return <ErrModal errModalText={this.state.errModalText} errLeave={this.errLeave.bind(this)}
                                 errSub={this.errSub.bind(this)}/>
            }
            return null;
        }


        //题目列表子项的点击事件
        numFun(index) {
            setTimeout(() => {
                this.setState({
                    nowNum: index + 1,
                    windowSwitch: true,
                    subitemSwitch: true
                }, () => {
                    this.carryQuestion()
                });
            }, 1000)

        }

        //提交所有的答案
        async subAllAnswer() {
            try {
                this.props.change_loading_text("交卷中");
                await this.props.finish_all(this.state.paperId);
                this.setState({
                    statusModalText: "恭喜成功交卷"
                });
                setTimeout(() => {
                    this.setState({
                        statusModalText: ""
                    })
                }, 1500)
            } catch (err) {
                this.setState({
                    errModalText: err.messageCode ? "网络中断，提交失败" : err.data.message
                });
            }
        }

        //提交总答案的dom
        subAllDom() {
            if (this.state.subAllSwitch) {
                return (
                    <div className={"result-answer-warp"}>
                        <NumList NumArr={this.props.paper.questionList} numFun={this.numFun.bind(this)}>
                        </NumList>
                        <button onClick={this.subAllAnswer.bind(this)}>交卷并查看结果</button>
                    </div>
                )
            }
        }

        //交卷成功的dom
        SuccessModalDom() {
            if (this.state.statusModalText) {
                return (
                    <SuccessModal statusModalText={this.state.statusModalText}>
                    </SuccessModal>
                )
            }
            return null;
        }

        //修改答案的悬浮窗
        reviseWindow() {
            if (this.state.windowSwitch) {
                return (
                    <div className={"revise-window"} onClick={() => {
                        this.setState({
                            windowSwitch: false
                        })
                    }}>
                        修改答案
                    </div>
                )
            } else {
                return (
                    <div className={"revise-warp"}>
                        <div className={"revise"}>
                            <p className={"clearfix"}>
                                请选择需要修改答案的题号，进行修改
                                <span className={"float-right"} onClick={() => {
                                    this.setState({
                                        windowSwitch: true
                                    })
                                }}>
                                关闭
                            </span>
                            </p>
                            <NumList NumArr={this.props.paper.questionList} numFun={this.numFun.bind(this)}>
                            </NumList>
                        </div>

                    </div>
                )
            }
        }

        render() {
            const props = {
                ...this.props,
                state: this.state,
                answerSub: this.answerSub.bind(this),
                errModalDom: this.errModalDom.bind(this),
                subAllDom: this.subAllDom.bind(this),
                SuccessModalDom: this.SuccessModalDom.bind(this),
                reviseWindow: this.reviseWindow.bind(this)
            };
            return <WrappedComponent {...props} />
        }
    }
};

export default hoc