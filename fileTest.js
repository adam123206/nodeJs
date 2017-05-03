'use strict'
//演示文件操作
var fs = require('fs');

//异步读取文件
fs.readFile('hello.js',function(err,data){

    if(err){
        
        
        console.log(err);
    }else{
        //data是一个Buffer，可以与String相互转换
        var text = data.toString('utf-8');
        //String -->Buffer
        var buf = new Buffer(text,'utf-8');
        
        console.log(data);
        console.log(data.length+'bytes');
    }
});

//同步读取文件
try {
    var data = fs.readFileSync('main.js','utf-8');
    console.log(data);
} catch (err) {
    
    console.log(err);
}

//写文件
/*
  传入参数是string以utf-8写入
  传入参数是Buffer，则以二进制写入
*/
var data2 = 'Hello.Node.js';
fs.writeFile('output.txt',data2,function(err){

    if(err){

        console.log(err);
    }else{

        console.log('ok');
    }
});
//异步写文件
fs.writeFileSync('output.txt',stat);

//获取文件对象信息
fs.stat('hello.js',function(err,data){

    if(err){

        console.log(err);
    }else{

        //是否是文件
        console.log('is File ',stat.isFile());

        //是否是目录
        console.log('is directory '+stat.isDirectory());

        if(stat.isFile()){

            console.log('file size '+stat.size);

            console.log('create time '+stat.birthtime);

            console.log('modify time '+stat.mtime);
        }
    }
});
