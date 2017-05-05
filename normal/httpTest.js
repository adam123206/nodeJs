'use strict'
/*
 request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
 response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器
*/
var http = require('http');

//创建http server 并传入回调函数
var server = http.createServer(function(request,response){

    //回调函数接受request 和response对象
    //获得http请求的method和url
    console.log(request.method+':'+request.url);

    //将http相应写入response当中
    response.writeHead(200,{'content-type':'text/html'});
    response.end('<h1>Hello world!</h1>');
});

//设置服务器监听地址
server.listen(8090);

console.log('server is running ');
