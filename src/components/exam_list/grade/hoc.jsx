import React, {Component} from "react";
import * as Server from "../../../utils/axios";
import * as joggle from "../../../utils/config";


const getDisplayName = component => component.displayName || component.name || "Component";
const hoc = WrappedComponent => {
    return class extends Component {
        static displayName = `HOC(${getDisplayName(WrappedComponent)})`;


        // 构造
        constructor(props) {
            super(props);
            this.state = {
                gradeIndex: 0
            }
        }

        componentDidMount() {
            this.getGrade();
            let initGrade = this.props.paper.gradeList.reduce((result, item, index) => {
                if (item.grade === this.props.paper.gradeIndex) {
                    result = index
                }
                return result
            }, 0);
            initGrade && (this.setState({
                gradeIndex: initGrade
            }));
        }

        //获取年级信息
        async getGrade() {
            let gradeConfig = {};
            let gradeResult = await Server._askAxios(gradeConfig, joggle.GRADE_INDEX);
            this.props.gain_grade(gradeResult.data);
            if (this.props.paper.gradeList.length && !this.props.paper.gradeIndex) {
                this.props.change_grade(this.props.paper.gradeList[0].grade);
            }
        }

        //年级的点击事件
        gradeChoose(index, gradeNum) {
            this.setState({
                gradeIndex: index
            });
            this.props.change_grade(gradeNum);
            this.props.parentExam(gradeNum)
        }

        //年级的dom
        gradeDom(gradeList) {
            if (gradeList.length) {
                return (
                    <div className="grade-warp">
                        {
                            gradeList.map((item, index) => {
                                return (
                                    <div
                                        className={`grade-item ${this.state.gradeIndex === index ? 'grade-item-active' : ''}`}
                                        key={item.grade}
                                        onClick={this.gradeChoose.bind(this, index, item.grade)}
                                    >
                                        {item.grade_label}
                                    </div>
                                )
                            })
                        }
                    </div>)
            }
            return null
        }

        render() {
            const props = {
                ...this.props,
                gradeDom: this.gradeDom.bind(this)
            };
            return <WrappedComponent {...props} />
        }
    }
};
export default hoc;
