//实现不同环境读取不同配置文件
const defaultConfig = './config-default.js';
const overrideConfig = './config-override.js';
const testConfig = './config-test.js';

const fs = require('fs');
var config = null;

if(precess.env.NODE_ENV ==='test'){

    console.log(`Load ${testConfig}...`);
    config = require(testConfig);
}else{

    console.log(`Load ${defaultConfig}...`);
    config = require(defaultConfig);
    try{

        if(fs.statSync(overrideConfig).isFile()){

            console.log(`Load ${overrideConfig}...`);
            config = Object.assigin(config,require(overrideConfig));
        }
    }catch(err){

        console.log(`Cannot load ${overrideConfig}`);
    }
}

module.exports = config;