'use strict'
//要用console.log打印想要输出的内容
var s = 'Hello';
function greeting(name){

    console.log(s+name);
}

function sayHi(name){


    console.log('say hi '+name);
}
//将编写的方法暴露出去

//一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;
module.exports = {

    greet:greeting,
    sayHi:sayHi
};
//或者可以这样实现
/*
 exports.greet = greeting;
 exports.sayhi = sayHi;

 如果我们要输出的是一个函数或数组，那么，只能给module.exports赋值
*/