// ==UserScript==
// @name         QQ相册外链工具
// @namespace    https://www.yge.me
// @version      0.7
// @description  QQ空间相册外链脚本,支持HTTPS
// @author       Y.A.K.E
// @match        https://user.qzone.qq.com/proxy/domain/qzs.qq.com/qzone/client/photo*
// @match        https://user.qzone.qq.com/proxy/domain/qzs.qq.com/qzone/photo/*
// @match        https://rc.qzone.qq.com/proxy/domain/qzs.qq.com/qzone/client/photo*
// @match        https://rc.qzone.qq.com/proxy/domain/qzs.qq.com/qzone/photo/*
// @run-at       document-end
// @grant        GM_setClipboard
// @grant        unsafeWindow
// ==/UserScript==

window.parent.ycp = function(cpurl){
 //console.log('ycp:    ' +cpurl);
       GM_setClipboard(cpurl);
};

(function() {
    'use strict';


window.onload = function () {


console.log('检测当前URL');
    console.log(document.URL);






    console.log('开始注册外链转换函数');
    //外链地址获取函数
    //腾讯新地址
    window.get_ex_url = function(oldurl){
        //var reg = /http\w?:\/\/.*?\/psb\?\/(.*?)\/(.*?)\/\w\/(.*?)&/gi
        var reg = /http\w?:\/\/.*?\/ps(\w)\?\/(.*?)\/(.*?)\/\w\/(.*?)$/gi
        var reg2 = /http\w?:\/\/.*?\/psc\?\/(.*?)$/gi

        var result;
        var newurl;
        if ((result = reg.exec(oldurl)) !== null) {
            console.log('匹配1');
            newurl = "//r.photo.store.qq.com/ps"+ result[1] +"?/" + result[2]  + "/" +  result[3] + "/r/"+  result[4] + "_yake_qzoneimgout.png";
            return newurl;
        }else{
            if ((result = reg2.exec(oldurl)) !== null) {
                console.log('匹配2');
                 newurl = "//r.photo.store.qq.com/psc?/" + result[1]  +   "/r/_yake_qzoneimgout.png";
                return newurl;
            }
            return  '';
        }
    };

    console.log('注册外链转换函数,完成')

//if(typeof jQuery == 'undefined') {
    //console.log("载入JQ "+ window.document.URL+"    \r\n");
    //var jQuery=window.parent.jQuery;  //JQ继承
    //console.log(jQuery('body'));
//}

    window.duang =function(){
        console.log("duang执行     \r\n");
        //当鼠标移动到图片上

    };




        //模拟点击原图上传,好像没卵用,删除先
        //jQuery('.radio_item_last').trigger("click");





        //console.log("脚本载入     \r\n");









        console.log("检测点开始");

    //jQuery('.j-pl-photoitem').each(function(e){ console.log(jQuery(this))});
//j-pl-photoitem
        jQuery('li.j-pl-photoitem').on('mouseover',function(){
            //console.log("mouseover事件     \r\n");
            var t_imgobj =jQuery(this).find('img.j-pl-photoitem-img');

            var t_imgsrc =t_imgobj.attr('src') ;
            var t_status = t_imgobj.attr('y-status') ;
//console.log(t_status);
            //已经添加过的不处理
            if (t_status != 'yes'){

                t_imgsrc = window.get_ex_url(t_imgsrc);
                //console.log(t_imgsrc);
                //取地址成功的失败的,让鼠标移开后再触发一次.
                if (t_imgsrc !== ''){
                    t_imgobj.attr('y-status','yes');//标记
                    var t_obj =t_imgobj.parent().nextUntil('.item-select','div.item-ex.j-pl-photoitem-info');
                    var t_desc = t_obj.find('.item-desc').text();
                    var t_html = '<a class="btn qz-right y_ex_out" onclick="window.parent.ycp(&apos;'+t_imgsrc+'&apos;)" style="float: right;cursor: pointer;" data-clipboard-demo="" data-clipboard-action="copy" data-clipboard-text="'+ t_imgsrc +'"><i title="外链" class="icon-m icon-upload-video-m"></i>外链</a>';
                    t_obj.find('.item-op').prepend(t_html);


                }

            }

        });
        //console.log("检测点结束");


        jQuery('.j-pl-photolist-ul').on('DOMNodeInserted',function(){
            //console.log("DOM插入");
            jQuery('li.j-pl-photoitem').on('mouseover',function(){
                var t_imgobj =jQuery(this).find('img.j-pl-photoitem-img');
                var t_imgsrc =t_imgobj.attr('src') ;
                var t_status = t_imgobj.attr('y-status') ;
                //已经添加过的不处理
                if (t_status != 'yes'){

                    t_imgsrc = window.get_ex_url(t_imgsrc);
                    //取地址成功的失败的,让鼠标移开后再触发一次.
                    if (t_imgsrc !== ''){
                        t_imgobj.attr('y-status','yes');//标记
                        var t_obj =t_imgobj.parent().nextUntil('.item-select','div.item-ex.j-pl-photoitem-info');
                        var t_desc = t_obj.find('.item-desc').text();
                        var t_html = '<a class="btn qz-right y_ex_out" onclick="window.parent.ycp(&apos;'+t_imgsrc+'&apos;)" style="float: right;cursor: pointer;" data-clipboard-demo="" data-clipboard-action="copy" data-clipboard-text="'+ t_imgsrc +'"><i title="外链" class="icon-m icon-upload-video-m"></i>外链</a>';
                        t_obj.find('.item-op').prepend(t_html);



                    }

                }

            });

        });

};





    // Your code here...
})();
