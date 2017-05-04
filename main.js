'use strict'
//引入其他模块，使用绝对路径
//一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量
var greent = require('./hello.js');
var s = 'huyaozhong';

greent(s);