'use strict'
/* 
  处理post请求
*/
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();




router.get('/',async(ctx,next)=>{

    ctx.response.body=`<h1>Index</h1>
    <form action="/singin" method="post">
        <p>Name:<input name="name" value="koa"></p>
        <p>Password:<input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/singin',async(ctx,next)=>{

    var name = ctx.request.body.name || '',
    password = ctx.request.body.password ||'';

    console.log(`singin with name:${name},password:${password}`);
    if(name==='zhongzhong'&&password ==='12345678'){

        ctx.response.body = `<h1>welcome ${name}</h1>`;
    }else {

        ctx.response.body = `<h1>login failed</h1>
        <p><a herf="/">tyr again</a></p>`;
    }
});
app.use(bodyParser()); //koa-bodyparser必须在router之前被注册到app对象上
app.use(router.routes());
app.listen(3000);
console.log('app is listen on port 3000');
