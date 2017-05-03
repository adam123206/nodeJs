'usr strict'
//如果要处理本地文件，则需要使用path模板，可以用来构造目录
var path  = require('path');
//解析当前目录
var  workDir = path.resolve('.');

//组合完整文件目录,当前目录+pub+output.txt
var filePath= path.join(workDir,'pub','output.txt');

console.log(filePath);