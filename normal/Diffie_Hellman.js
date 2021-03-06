'use strict'

const crypto = require('crypto');
var ming =crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log('Prime'+prime.toString('hex'));
console.log('generator'+generator.toString('hex'));

var hong  = crypto.createDiffieHellman(prime,generator);
var hong_keys= hong.generateKeys();

//exchange keys
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

console.log('Secret of xiaoming :'+ming_secret.toString('hex'));
console.log('Secret of xiaohong:'+hong_secret.toString('hex'));

