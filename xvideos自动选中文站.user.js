// ==UserScript==
// @name         xvideos自动选中文站
// @namespace    https://www.yge.me
// @version      0.1
// @description  x站自动选中文
// @author       Y.A.K.E
// @match        https://www.xvideos.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
if($(".country-switch").attr('data-country') != 'cn'){window.location.href= 'https://www.xvideos.com/change-country/cn';}
    // Your code here...
})();