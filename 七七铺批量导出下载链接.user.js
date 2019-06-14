// ==UserScript==
// @name         七七铺批量导出下载链接
// @namespace    https://www.yge.me/
// @version      0.1
// @description  导出给Aria2下载
// @author       Y.A.K.E
// @match        http://www.qiqipu.com/*
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    jQuery('.xf_down_all').after('<a href="javascript:void(0);" class="get_y_cc" style="color: blue;" target="_self">复制选中原始链接</a><a href="javascript:void(0);" class="get_y_cc2" style="color: red;" target="_self">复制全部原始链接</a>');



    jQuery('.get_y_cc2').click(function(){
        window.y_cc='';
        jQuery(this).parent().prev().find('.publish_down a').each(function(e){
            window.y_cc = window.y_cc + jQuery(this).attr('href')  + "\n";
        });
        GM_setClipboard(window.y_cc);

    });




//复制选中
    jQuery('.get_y_cc').click(function(){
        window.y_cc='';
        jQuery('.down_url').each(function(index,e){
            if (jQuery(this).is(':checked')){
                window.y_cc = window.y_cc + jQuery('.publish_down a').eq(index).attr('href')  + "\n";
            }
            GM_setClipboard(window.y_cc);

        });



    });

})();