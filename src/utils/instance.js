import axios from 'axios';

const EventEmitter = require('events').EventEmitter;

class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();

//loading的方法
function toggleLoading(result) {
    const loadingDom = document.getElementsByClassName("loadingDom")[0];
    loadingDom.style.display = result ? "block" : "none";
}

//监听显示loading事件
myEmitter.on("SHOW_LOADING", toggleLoading);

//监听隐藏loading的方法
myEmitter.on("HIDE_LOADING", toggleLoading);

//err的方法
function toggleErr(result) {
    const contentDom = document.getElementsByClassName("content")[0];
    const errDom = document.getElementsByClassName("err")[0];
    contentDom.style.display = result ? "none" : "block";
    errDom.style.display = result ? "block" : "none"
}

//监听显示err事件
myEmitter.on("SHOW_ERR", toggleErr);

//监听隐藏err的方法
myEmitter.on("HIDE_ERR", toggleErr);

const instance = axios.create({
    //当创建实例的时候配置默认配置
    xsrfCookieName: 'xsrf-token'
});

let RequestAddress = "";

//添加请求拦截器
instance.interceptors.request.use(function (config) {
    myEmitter.emit("SHOW_LOADING", true);
    return config;
}, function (error) {
    console.log("req err is", error);
    myEmitter.emit("HIDE_LOADING", false);
    return Promise.reject(error);
});

//添加一个响应拦截器
instance.interceptors.response.use(function (response) {
    myEmitter.emit("HIDE_LOADING", false);
    RequestAddress = response.config.url;
    if (+response.data.code !== 0) {
        if (RequestAddress.indexOf("/paper/finish-question") === -1) {
            myEmitter.emit("SHOW_ERR", true);
        }
        return Promise.reject(response);
    } else {
        myEmitter.emit("HIDE_ERR", false);
        return response;
    }
}, function (err) {
    myEmitter.emit("HIDE_LOADING", false);
    if (RequestAddress.indexOf("/paper/finish-question") === -1) {
        myEmitter.emit("SHOW_ERR", true);
    }
    console.log("res err is", err);
    return Promise.reject({
        messageCode: 'sysError'
    });
});

export default instance;
