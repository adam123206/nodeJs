'use strict'
/*
  提供加密算法
  如果要计算SHA1，只需要把'md5'改成'sha1'
  还可以使用更安全的sha256和sha512
*/
//md5
const crypto = require('crypto');
const hash = crypto.createHash('md5');
const sha =  crypto.createHash('sha512');

var hello = hash.update('hello world');
//console.log('after update'+hello);
//console.log(sha.digest('hex'));

/*
 Hmac 需要一个密钥
  
*/
const hmac = crypto.createHmac('sha256','secrte-key');

hmac.update('hello world');

//console.log(hmac.digest('hex'));

function aesEncrypt(data,key){

    const cipher = crypto.createCipher('aes192',key);
    var crypted = cipher.update(data,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted,key){

    const decipher = crypto.createDecipher('aes192',key);
    var decrypted = decipher.update(encrypted,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'hello this is a secret message';
var key  ='password';
var encrypted = aesEncrypt(data,key);
var decrypted = aesDecrypt(encrypted,key);

console.log('plain test'+data);
console.log('Encrypeted'+encrypted);
console.log('decrypted'+decrypted);

