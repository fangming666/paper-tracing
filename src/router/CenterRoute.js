import CenterLayout from "./CenterLayout";
import React from "react";
import {Route} from "react-router-dom"
import LoadingDom from "../components/hint/loadingDom/loadingDom";
import Err from "../components/hint/err/err"
import * as hideMenu from "./../utils/weixin_share";
import * as is_weixin from "./../utils/is_weixin";
import * as joggle from "../utils/config";
import * as Server from "../utils/axios";

let weixinFun = async () => {
    let page = {data: {url: window.location.href}};
    try {
        let result = await Server._askAxios(page, joggle.WEIXIN_JS);
        window.wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: result.data.data.appId, // 必填，公众号的唯一标识
            timestamp: result.data.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: result.data.data.nonceStr, // 必填，生成签名的随机串
            signature: result.data.data.signature, // 必填，签名，见附录1
            jsApiList: ["chooseWXPay", "hideMenuItems", "hideAllNonBaseMenuItem"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        hideMenu.hide_menu()
    } catch (e) {
        console.log("err is", e);
        hideMenu.hide_menu()
    }

};

const CenterRoute = ({component: Component, ...routeProps}) => {
    if (is_weixin.isWeixin()) {
        weixinFun();
    }

    return (
        <Route
            {...routeProps}
            exact
            render={matchProps => (
                <CenterLayout title={routeProps.title}>
                    <LoadingDom>
                    </LoadingDom>
                    <Err>
                    </Err>
                    <div className={"content"}>
                        <Component {...matchProps}/>
                    </div>
                </CenterLayout>
            )}
        />
    )
};
export default CenterRoute

