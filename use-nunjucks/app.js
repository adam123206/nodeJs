'use strict'
const nunjucks = require('nunjucks');

function createEnv(path ,opts){

    var autoescape= opts.autoescape && true,
    noCache = opts.noCache || false,
    watch = opts.watch || false,
    throwOnUndefined = opts.throwOnUndefined || false,
    //传入path
    env = new nunjucks.Environment(new nunjucks.FileSystemLoader('view',
    {noCache:noCache,watch:watch}),{autoescape:autoescape,throwOnUndefined:throwOnUndefined});

    if(opts.filters){

        for(var f in opts.filters){

            env.addFilter(f,opts.filters[f]);
        }
    }
    return env;

}

var env = createEnv('view',{watch:true,filters:{

    hex:function(n){

        return '0x'+n.toString(16);
    }
}});

var s = env.render('hello.html',{name:'zhongzhong'});
//console.log(s);
console.log(env.render('extend.html',{header:'hello',body:'test'}));