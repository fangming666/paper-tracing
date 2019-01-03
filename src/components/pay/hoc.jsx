import React, {Component} from "react";
import * as wexinPay from "./../../utils/weixin_pay";
import * as is_weixin from "./../../utils/is_weixin";


const getDisplayName = component => component.displayName || component.name || "Component";

const hoc = WrappedComponent => {
    return class extends Component {
        static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

        // 构造
        constructor(props) {
            super(props);
            this.state = {
                alertText: "",
                statusModalText: ""
            }
        }

        componentDidMount() {
            this.props.get_goods();
        }

        async goPay(id) {
            if (!is_weixin.isWeixin()) {
                this.setState({
                    alertText: "无法进行支付"
                });
                setTimeout(() => {
                    this.setState({
                        alertText: ""
                    });
                }, 1500)
            } else {
                this.setState({
                    alertText: ""
                });
                try {
                    await this.props.gain_order(id, this.props.paper.gradeIndex);
                    wexinPay.weixin_pay(this.props.paper.payObj, () => {
                        this.setState({
                            statusModalText: "支付成功"
                        });
                        setTimeout(() => {
                            this.setState({
                                statusModalText: ""
                            })
                        }, 1500)
                    }, () => {
                        this.setState({
                            alertText: "支付失败"
                        });
                    })
                } catch (e) {
                    console.log(e)
                }
            }

        }

        payDom(dataList) {
            if (!dataList.length) return null;
            let resultList = dataList.reduce((arr, item) => {
                if (item.grade === this.props.paper.gradeIndex) {
                    arr = item.goods
                }
                return arr;
            }, []);
            return (resultList.map(item => {
                return (
                    <div className={"goods-item"} key={item.good_id}>
                        <span>{item.name}</span>
                        <b className={"text-warning"}>¥{item.price}</b>
                        <button onClick={this.goPay.bind(this, item.good_id)}
                                className={`btn btn-warning float-right`}>立即购买
                        </button>
                    </div>
                )
            }))
        }

        getPay(grade) {
            return grade
        }


        //显示支付成功的dom


        render() {
            const props = {
                ...this.props,
                state: this.state,
                payDom: this.payDom.bind(this),
                getPay: this.getPay.bind(this),
            };
            return <WrappedComponent {...props} />
        }
    }
};

export default hoc
