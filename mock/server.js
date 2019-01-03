let express = require("express");

let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


let router = express.Router();
let paper = require("./data/paper");
router.use(paper);

let grade = require("./data/grade");
router.use(grade);

let goods = require("./data/goods");
router.use(goods);

let order = require("./data/order");
router.use(order);

let weixin = require("./data/weixin");
router.use(weixin);

let question = require("./data/question");
router.use(question);

let finish = require("./data/finish");
router.use(finish);

let finishAll = require("./data/finishAll");
router.use(finishAll);

app.use(router);
app.listen(9090, () => {
    console.log("server is running")
});