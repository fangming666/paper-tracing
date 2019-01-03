let Mock = require("mockjs");
let express = require("express");
let router = express.Router();

router.use("/grade/index", (req, res) => {
    let data = Mock.mock({
            code: 0,
            message: '如果有错误，这里是错误信息',

            data: [{
                        "grade": 7,
                        "grade_label": "7年级"
                    }, {
                        "grade": 8,
                        "grade_label": "8年级"
                    }, {
                        "grade": 9,
                        "grade_label": "9年级"
                    }]

        }
    );
    return res.json(data)
});
module.exports = router;