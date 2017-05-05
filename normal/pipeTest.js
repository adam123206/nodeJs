'use strict'

var fs = require('fs');

var rs = fs.createReadStream('simple.txt');
var ws = fs.createWriteStream('output2.txt');
//管道，自动把Readable内容输出到writeable当中
rs.pipe(ws);
//默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流
//rs.pipe(ws,{end:false});