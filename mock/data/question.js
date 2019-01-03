let Mock = require("mockjs");
let express = require("express");
let router = express.Router();

router.use("/paper/question", (req, res) => {
    let data = Mock.mock(
        {
            code: 0, // 整数，如果有错误，这里是错误代码，没有错误为 0
            message: '如果有错误，这里是错误信息', // 字符串
            data: [
                {
                    "paper_id": 11,
                    "question_id": 11,
                    "question_num": 1,
                    "question_content": "<p><span style=\"line-height: 150%; font-family: 宋体, SimSun; font-size: 18px;\">18、某射箭运动员在一次比赛中前 6 次射击共击中 52 环，如果他要打破 89 环（10 次射击，每次射击最高中 10 环）的记录，则他第 7 次射击不能少于（&nbsp;&nbsp; ）</span></p>",
                    "answer": "A",
                    "my_answer": "A",
                    "answers": [
                        {
                            "option": "A",
                            "content": "1对角相等"
                        },
                        {
                            "option": "B",
                            "content": "四边相等"
                        },
                        {
                            "option": "C",
                            "content": "对角线互相平分"
                        },
                        {
                            "option": "D",
                            "content": "四角相等"
                        },
                        {
                            "option": "E",
                            "content": "我不会做"
                        }
                    ]
                },
                {
                    "paper_id": 11,
                    "question_id": 12,
                    "question_num": 2,
                    "question_content": "<p><span style=\"line-height: 150%; font-family: 宋体, SimSun; font-size: 18px;\">18、某射箭运动员在一次比赛中前 6 次射击共击中 52 环，如果他要打破 89 环（10 次射击，每次射击最高中 10 环）的记录，则他第 7 次射击不能少于（&nbsp;&nbsp; ）</span></p>",
                    "answer": "A",
                    "my_answer": "B",
                    "answers": [
                        {
                            "option": "A",
                            "content": "15"
                        },
                        {
                            "option": "B",
                            "content": "30"
                        },
                        {
                            "option": "C",
                            "content": "45"
                        },
                        {
                            "option": "D",
                            "content": "60"
                        },
                        {
                            "option": "E",
                            "content": "我不会做"
                        }
                    ]
                },
                {
                    "paper_id": 11,
                    "question_id": 13,
                    "question_num": 3,
                    "question_content": "<p><span style=\"line-height: 150%; font-family: 宋体, SimSun; font-size: 18px;\">18、某射箭运动员在一次比赛中前 6 次射击共击中 52 环，如果他要打破 89 环（10 次射击，每次射击最高中 10 环）的记录，则他第 7 次射击不能少于（&nbsp;&nbsp; ）</span></p>",
                    "answer": "A",
                    "my_answer": "C",
                    "answers": [
                        {
                            "option": "A",
                            "content": "3对角相等"
                        },
                        {
                            "option": "B",
                            "content": "四边相等"
                        },
                        {
                            "option": "C",
                            "content": "对角线互相平分"
                        },
                        {
                            "option": "D",
                            "content": "四角相等"
                        },
                        {
                            "option": "E",
                            "content": "我不会做"
                        }
                    ]
                },
                {
                    "paper_id": 11,
                    "question_id": 14,
                    "question_num": 4,
                    "question_content": "<p><span style=\"line-height: 150%; font-family: 宋体, SimSun; font-size: 18px;\">18、某射箭运动员在一次比赛中前 6 次射击共击中 52 环，如果他要打破 89 环（10 次射击，每次射击最高中 10 环）的记录，则他第 7 次射击不能少于（&nbsp;&nbsp; ）</span></p>",
                    "answer": "A",
                    "my_answer": "D",
                    "answers": [
                        {
                            "option": "A",
                            "content": "4对角相等"
                        },
                        {
                            "option": "B",
                            "content": "四边相等"
                        },
                        {
                            "option": "C",
                            "content": "对角线互相平分"
                        },
                        {
                            "option": "D",
                            "content": "四角相等"
                        },
                        {
                            "option": "E",
                            "content": "我不会做"
                        }
                    ]
                },
                {
                    "paper_id": 11,
                    "question_id": 15,
                    "question_num": 5,
                    "question_content": "<p><span style=\"line-height: 150%; font-family: 宋体, SimSun; font-size: 18px;\">18、某射箭运动员在一次比赛中前 6 次射击共击中 52 环，如果他要打破 89 环（10 次射击，每次射击最高中 10 环）的记录，则他第 7 次射击不能少于（&nbsp;&nbsp; ）</span></p>",
                    "answer": "A",
                    "my_answer": "E",
                    "answers": [
                        {
                            "option": "A",
                            "content": "5对角相等"
                        },
                        {
                            "option": "B",
                            "content": "四边相等"
                        },
                        {
                            "option": "C",
                            "content": "对角线互相平分"
                        },
                        {
                            "option": "D",
                            "content": "四角相等"
                        },
                        {
                            "option": "E",
                            "content": "我不会做"
                        }
                    ]
                },
                {
                    "paper_id": 11,
                    "question_id": 16,
                    "question_num": 6,
                    "question_content": "<p><span style=\"line-height: 150%; font-family: 宋体, SimSun; font-size: 18px;\">18、某射箭运动员在一次比赛中前 6 次射击共击中 52 环，如果他要打破 89 环（10 次射击，每次射击最高中 10 环）的记录，则他第 7 次射击不能少于（&nbsp;&nbsp; ）</span></p>",
                    "answer": "A",
                    "my_answer": "A",
                    "answers": [
                        {
                            "option": "A",
                            "content": "6对角相等"
                        },
                        {
                            "option": "B",
                            "content": "四边相等"
                        },
                        {
                            "option": "C",
                            "content": "对角线互相平分"
                        },
                        {
                            "option": "D",
                            "content": "四角相等"
                        },
                        {
                            "option": "E",
                            "content": "我不会做"
                        }
                    ]
                },
                {
                    "paper_id": 11,
                    "question_id": 17,
                    "question_num": 7,
                    "question_content": "<p><span style=\"line-height: 150%; font-family: 宋体, SimSun; font-size: 18px;\">18、某射箭运动员在一次比赛中前 6 次射击共击中 52 环，如果他要打破 89 环（10 次射击，每次射击最高中 10 环）的记录，则他第 7 次射击不能少于（&nbsp;&nbsp; ）</span></p>",
                    "answer": "A",
                    "my_answer": "",
                    "answers": [
                        {
                            "option": "A",
                            "content": "7对角相等"
                        },
                        {
                            "option": "B",
                            "content": "四边相等"
                        },
                        {
                            "option": "C",
                            "content": "对角线互相平分"
                        },
                        {
                            "option": "D",
                            "content": "四角相等"
                        },
                        {
                            "option": "E",
                            "content": "我不会做"
                        }
                    ]
                }
            ]
        }
    );
    return res.json(data)
});
module.exports = router;