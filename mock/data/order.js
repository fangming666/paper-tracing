let Mock = require("mockjs");
let express = require("express");
let router = express.Router();

router.use("/order/create", (req, res) => {
    let data = Mock.mock(
        {
            code: 0, // 整数，如果有错误，这里是错误代码，没有错误为 0
            message: '如果有错误，这里是错误信息', // 字符串
            data: {//微信支付jssdk需要的信息
                appId: '1',//
                timeStamp: '2',
                nonceStr: '3',
                package: '4',
                signType: '5',
                paySign: '6',
            }
        }
    );
    return res.json(data)
});
module.exports = router;