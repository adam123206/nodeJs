'use strict'
/*
 解析请求头重的url
 url模板，通过parse将一个字符串解析为一个Url对象

var url = require('url');

var data = url.parse('http://localhost:8090/path/to/file?query=string#hash');
console.log(data);
console.log(data.protocol);
console.log(data.host);
console.log(data.port);*/
var fs = require('fs'),url = require('url'),path=require('path'),http=require('http');

//从命令行获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir:'+root);
//创建服务器
var server = http.createServer(function(request,response){

    //获取url path
    var pathName = url.parse(request.url).pathname;
    //获得对应的本地文件路径
    var filePath = path.join(root,pathName);
    //获取文件状态
    fs.stat(filePath,function(err,stats){

        if(!err && stats.isFile()){

            console.log('200:'+request.url);
            response.writeHead(200);
            //将文件流导向response
            fs.createReadStream(filePath).pipe(response);
        }else{

            //出错或则文件不存在
            console.log('404'+request.url);
            //发送404响应
            response.writeHead(404);
            response.end('404 not found');
        }
    });
    
});
server.listen(8090);
console.log('Server is running at :localhost:8090/');