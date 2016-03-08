//引入 scss/css 文件
require('./style/main.scss')


var util = require('./js/util');
var $ = require('jquery');

//js代码开始

const name = "Kaien";
$('section.nav').text(util(name));

//js代码结束