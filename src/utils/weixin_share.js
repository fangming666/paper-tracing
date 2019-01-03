/* 微信隐藏分享
* **/
let hideMenu = () => {
    window.wx.ready(function () {
        window.wx.hideAllNonBaseMenuItem()
    })
};
export const hide_menu = hideMenu;