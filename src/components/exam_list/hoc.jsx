import React, {Component} from "react";
import * as joggle from "../../utils/config";
import * as Server from "../../utils/axios";
import PropTypes from 'prop-types';

const getDisplayName = component => component.displayName || component.name || "Component";

const hoc = WrappedComponent => {
    return class extends Component {
        static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

        // 构造
        constructor(props) {
            super(props);
            this.state = {
                issue: false,
                alertText: ""
            }
        }

        static contextTypes = {
            router: PropTypes.object.isRequired,
        }

        componentDidUpdate() {
            //考试列表box的高度
            this.getExamHeight();
        }

        componentDidMount() {
            this.getExam(this.props.paper.gradeIndex, 1)
        }


        parentExam(grade) {
            this.getExam(grade, 1)
        }

        //考试信息的获取
        async getExam(grade, page) {
            try {
                let examConfigure = {data: {grade: grade, page: page}};
                let examResult = await Server._askAxios(examConfigure, joggle.PAPER_INDEX);
                this.props.gain_exam(examResult.data);
            } catch (e) {
                console.log("err is", e)
            }
        }

        //月份的过滤函数
        timeFilter(time) {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            if (time === `${year}年${month}月`) return "本月";
            return time;
        }

        //点击列表项进行跳转
        skipClick(...result) {
            this.setState({
                issue: false
            });
            if (!result[0]) {
                this.setState({
                    issue: true,
                    alertText: "未发布"
                });
                setTimeout(() => {
                    this.setState({
                        issue: false,
                        alertText: ""
                    });
                }, 1500)
            }
            else if (!result[1]) {
                let path = {
                    pathname: '/pay',
                };
                this.context.router.history.push(path);
            } else {
                if (+result[2] === 3) {
                    this.context.router.history.push('/report');
                } else {
                    let path = {
                        pathname: '/question',
                        state: {paper_id: result[3], name: result[4], chapter_name: result[5]},
                    };
                    this.context.router.history.push(path);
                }
            }
        };


        //考试列表的dom
        examListDom(listArr) {
            let examStatusDom = (result, num) => {
                switch (result) {
                    case 1:
                        return (
                            <div className={"exam-primary"}>
                                开始作答
                            </div>
                        );
                    case 2:
                        return (
                            <div className={"exam-warning"}>
                                继续作答
                            </div>
                        );
                    case 3:
                        return (
                            <div className={"exam-finish"}>
                                <p>
                                    <span>{num}</span>%
                                </p>
                                <p>
                                    正确率
                                </p>
                            </div>
                        );
                    default:
                        return null
                }
            };
            return (
                listArr.map(item => {
                    return (

                        <div key={item.paper_id}
                             className="exam-item"
                             onClick={this.skipClick.bind(this, item.send_status, item.vip_status, item.status, item.paper_id, item.name, item.chapter_name)}
                        >
                            <p className={"exam-name"}>
                                {item.name}
                            </p>
                            <p className={"exam-item-info"}>
                                <span>{item.create_time}</span>
                                <span>提交人数：{item.finish_num}</span>
                            </p>
                            <div className={`exam-item-status ${+item.status === 3 ? 'border-left-none' : ''}`}>
                                {examStatusDom(+item.status, item.correct_rate)}
                            </div>
                        </div>
                    )
                })

            )
        }

        //VIP天数的dom
        vipDay(vipLastDay) {
            if (vipLastDay) {
                return (
                    <div className="vip-day">
                        <img src={`${process.env.PUBLIC_URL}/imgs/grin-tears.png`}
                             srcSet={`${process.env.PUBLIC_URL}/imgs/grin-tears@2x.png 2x ,${process.env.PUBLIC_URL}/imgs/grin-tears@3x.png 3x`}
                             alt="icon"/>
                        离会员到期时间还有{vipLastDay}
                    </div>
                )
            }
            return null;
        }

        //考试列表box的高度
        getExamHeight() {
            let vipHeight = document.getElementsByClassName("vip-day")[0] ? document.getElementsByClassName("vip-day")[0].offsetHeight : 0;
            let gradeHeight = document.getElementsByClassName("grade-warp")[0] ? document.getElementsByClassName("grade-warp")[0].offsetHeight + 5 : 0;
            let allHeight = document.body.offsetHeight;
            if (document.getElementsByClassName("exam")[0]) {
                document.getElementsByClassName("exam")[0].style.height = (allHeight - vipHeight - gradeHeight) + "px";
            }
        }

        testClick() {
            this.props.test_change();
            console.log(`this.props.paper.testNum is ${this.props.paper.testNum}`);
        }

        render() {
            const props = {
                ...this.props,
                state: this.state,
                examListDom: this.examListDom.bind(this),
                vipDay: this.vipDay,
                getExam: this.getExam.bind(this),
                parentExam: this.parentExam.bind(this),
                timeFilter: this.timeFilter.bind(this),
                testClick: this.testClick.bind(this)
            };
            return <WrappedComponent {...props} />
        }
    }
};

export default hoc
