'use strict'
const Koa = require('koa');
//创建koa对象本身
const app = new Koa();

app.use(async(ctx,next)=>{

    console.log('1');
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();//将调用下一个middleware
    console.log('after await');//会最后打印出来，如果await后还有为执行程序，则调用的middleware结束后继续执行

});

app.use(async(ctx,next)=>{

    console.log('2');
    const start =new Date().getTime();
    console.log(`start time ${start}`);
    await next();//调用下一个middleware
    const ms = new Date().getTime() - start;
    console.log(`Time:${ms}ms`);
});

app.use(async(ctx,next)=>{
console.log('3');
    await next();
    ctx.response.type='text/html';
    ctx.response.body='<h1>hello world</h1>';
});

app.listen(3000);
console.log('app is listen on port 3000');