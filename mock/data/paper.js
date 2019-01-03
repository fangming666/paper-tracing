let Mock = require("mockjs");
let express = require("express");
let router = express.Router();

router.use("/paper/index", (req, res) => {
    let data = Mock.mock({
            code: 0,
            message: '如果有错误，这里是错误信息',
            vip_end_date: ["2018-08-05"],
            vip_last_day: ["8天"],
            data: [
                {
                    "create_date": "2018年9月",
                    "list": [
                        {
                            "paper_id": 11,
                            "name": "第一章 函数测试 (上)",
                            "chapter_name": "1.1-1.3小节",
                            "status": 1,
                            "question_num": 20,
                            "answer_num": 13,
                            "correct_rate": 48,
                            "create_time": "2018-7-18  18:46:18",
                            "finish_num": 4,
                            "finish_time": "",
                            "send_status": 1,
                            "vip_status": 0
                        },
                        {
                            "paper_id": 12,
                            "name": "第一章 函数测试 (中)",
                            "chapter_name": "1.1-1.3小节",
                            "status": 1,
                            "question_num": 20,
                            "answer_num": 13,
                            "correct_rate": 48,
                            "create_time": "2018-7-18  18:46:18",
                            "finish_num": 4,
                            "finish_time": "",
                            "send_status": 0,
                            "vip_status": 0
                        },
                        {
                            "paper_id": 13,
                            "name": "第一章 函数测试 (下)",
                            "chapter_name": "1.4-1.5小节",
                            "status": 3,
                            "question_num": 10,
                            "answer_num": 3,
                            "correct_rate": 48,
                            "create_time": "2018-7-8  18:46:18",
                            "finish_num": 40,
                            "finish_time": "",
                            "send_status": 1,
                            "vip_status": 1
                        },
                        {
                            "paper_id": 14,
                            "name": "第一章 函数测试 (上)",
                            "chapter_name": "1.6-1.7小节",
                            "status": 2,
                            "question_num": 20,
                            "answer_num": 13,
                            "correct_rate": 48,
                            "create_time": "2018-7-1  18:46:18",
                            "finish_num": 14,
                            "finish_time": "",
                            "send_status": 1,
                            "vip_status": 1
                        }
                    ]
                },
                {
                    "create_date": "2018年4月",
                    "list": [
                        {
                            "paper_id": 15,
                            "name": "第一章 函数测试 (中)",
                            "chapter_name": "1.4-1.5小节",
                            "status": 1,
                            "question_num": 10,
                            "answer_num": 3,
                            "correct_rate": 48,
                            "create_time": "2018-6-8  18:46:18",
                            "finish_num": 40,
                            "finish_time": "",
                            "send_status": 0,
                            "vip_status": 1
                        },
                        {
                            "paper_id": 16,
                            "name": "第一章 函数测试 (下)",
                            "chapter_name": "1.6-1.7小节",
                            "status": 2,
                            "question_num": 20,
                            "answer_num": 13,
                            "correct_rate": 48,
                            "create_time": "2018-6-18  18:46:18",
                            "finish_num": 14,
                            "finish_time": "",
                            "send_status": 1,
                            "vip_status": 0
                        },
                        {
                            "paper_id": 17,
                            "name": "第一章 函数测试 (上)",
                            "chapter_name": "1.4-1.5小节",
                            "status": 1,
                            "question_num": 10,
                            "answer_num": 3,
                            "correct_rate": 48,
                            "create_time": "2018-6-8  18:46:18",
                            "finish_num": 40,
                            "finish_time": "",
                            "send_status": 1,
                            "vip_status": 1
                        },
                        {
                            "paper_id": 18,
                            "name": "第一章 函数测试 (中)",
                            "chapter_name": "1.6-1.7小节",
                            "status": 2,
                            "question_num": 20,
                            "answer_num": 13,
                            "correct_rate": 48,
                            "create_time": "2018-6-18  18:46:18",
                            "finish_num": 14,
                            "finish_time": "",
                            "send_status": 0,
                            "vip_status": 0
                        }
                    ]
                }
            ]
        }
    );
    return res.json(data)
});
module.exports = router;