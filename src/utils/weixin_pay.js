//微信支付方法（点击按键调用）
import * as is_weixin from "./is_weixin";

/*
微信支付方法
获取微信加签信息
@param{data}:获取的微信加签
@param{cb}:成功回调
*/

let wexinPay = (data, cb, errorCb) => {
    window.wx.ready(function () {
        if (!is_weixin.isWeixin()) {
            return false;
        }
        window.wx.chooseWXPay({
            timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: data.paySign, // 支付签名
            success: function (res) {
                // 支付成功后的回调函数
                cb(res);
            },
            fail: function (res) {
                errorCb(res);
            }
        });
    });
};
window.wx.error(function (res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    /*alert("config信息验证失败");*/
});

export const weixin_pay = wexinPay;