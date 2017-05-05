'use strict'
const Koa = require('koa');

//以上的处理过程能够正对不同的请求url相应不同的页面，但是太繁琐，所以引入koa-router
const router = require('koa-router')();//require('koa-router')()返回的是函数
const app = new Koa();

app.use(async(ctx,next)=>{

    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

//add url-route:注册Get请求
router.get('/hello/:name',async(ctx,next)=>{

    var name = ctx.params.name; //访问变量
    ctx.response.body = `<h1>hello,${name}</h1>`;
});
//add url-route:注册Get请求
router.get('/',async(ctx,next)=>{

    ctx.response.body='<h1>index</h1>';
});

//add router 
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000');

//以上内容处理get请求，要想使用post请求，请看app4.js
/*app.use(async(ctx,next)=>{

    if(ctx.request.path==='/'){

        ctx.response.body='index page';
    }else{

        await next();
    }
});

app.use(async(ctx,next)=>{

    if(ctx.request.path==='/test'){

        ctx.response.body='Test page';
    }else{

        await next();
    }
});

app.use(async(ctx,next)=>{

    if(ctx.request.path==='/error'){

        ctx.response.body='Error page';

    }else{

        await next();
    }
});*/

