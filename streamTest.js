'use strict'

var fs = require('fs');

//创建node 流对象
var st = fs.createReadStream('simple.txt','utf-8');
var wt = fs.createWriteStream('output.txt','utf-8');

//data事件表示流的数据已经可以读取了,data事件可能会有多次，每次传递的chunk是流的一部分数据。
st.on('data',function(chunk){

    console.log('DATA');
    //以流的形式写入文件，只需要不断调用write()方法，最后以end()结束
    wt.write(chunk);
    wt.end();
    console.log(chunk);
});
st.on('data',function(chunk){

    console.log('data2');
    console.log(chunk);
});
//end事件表示这个流已经到末尾了,没有数据可以读取了
st.on('end',function(){

    console.log('END');
});
//error事件表示出错了
st.on('error',function(err){

    console.log('Error'+err);
});
//所有可以读取数据的流都继承自stream.Readable，所有可以写入的流都继承自stream.Writable