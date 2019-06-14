// ==UserScript==
// @name         弹琴吧VIP播放脚本
// @namespace    https://www.yge.me/
// @version      0.1
// @description  需要安装他们的客户端,调用客户端播放的.
// @author       Y.A.K.E
// @match        http://www.tan8.com/yuepu-*.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    if ('javascript:;' ==  jQuery("#btn_play").attr('href')){
        var vhref ='/open_yp.php?ypid' + ypid;
        jQuery("#btn_play").attr('href',vhref ).attr('target',"_blank").html('免VIP播放').removeAttr('id');
    }
})();