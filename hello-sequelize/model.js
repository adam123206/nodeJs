const fs = require('fs');
const db = require('./db');

let files = fs.readdir(__dirname+'/model');


let js_files = files.filter((f)=>{

    return f.endWith('.js');
},files);

module.exports = {};

for(let f of js_files){

    console.log(`import model from files ${f}...`);
    let name = f.substring(0,f.length-3);
    module.exports[name] = require(__dirname+'/models/'+f);
}

module.exports.sync = ()=>{
    db.sync();
};