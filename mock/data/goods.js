let Mock = require("mockjs");
let express = require("express");
let router = express.Router();

router.use("/grade/goods", (req, res) => {
    let data = Mock.mock({
            code: 0,
            message: '如果有错误，这里是错误信息',
            data: [{
                grade: 7,
                grade_label: '7年级',
                goods: [{
                    name: '半年',
                    good_id: 2,//价格id,
                    price: 200,//价格
                },{
                    name: '一个月',
                    good_id: 3,//价格id,
                    price: 30,//价格
                }]
            },{
                grade: 8,
                grade_label: '8年级',
                goods: [{
                    name: '半年',
                    good_id: 2,//价格id,
                    price: 300,//价格
                },{
                    name: '一个月',
                    good_id: 3,//价格id,
                    price: 40,//价格
                }]
            },{
                grade: 9,
                grade_label: '9年级',
                goods: [{
                    name: '半年',
                    good_id: 2,//价格id,
                    price: 600,//价格
                },{
                    name: '一个月',
                    good_id: 3,//价格id,
                    price: 50,//价格
                }]
            }]

        }
    );
    return res.json(data)
});
module.exports = router;