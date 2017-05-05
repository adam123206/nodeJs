'use strict'
const Koa = require('koa');
//创建koa对象本身
const app = new Koa();
//对于任何请求，koa将嗲用异步函数处理请求
/* 参数ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response，
   next是koa传入的将要处理的下一个异步函数。
  
*/
app.use(async(ctx,next)=>{

//我们把每个async函数称为middleware
//koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数
    await next();//由async标记的函数称为异步函数，在异步函数中，可以用await调用另一个异步函数
    ctx.response.type = 'text/html';
    ctx.response.body='<h1>hello world</h1>';
});
app.listen(3000);
console.log('app started at port 3000');