let Mock = require("mockjs");
let express = require("express");
let router = express.Router();

router.use("/paper/finish", (req, res) => {
    let data = Mock.mock(
        {
            code: 0, // 整数，如果有错误，这里是错误代码，没有错误为 0
            message: '如果有错误，这里是错误信息', // 字符串
        }
    );
    return res.json(data)
});
module.exports = router;