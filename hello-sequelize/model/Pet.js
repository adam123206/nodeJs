const db = require('../db');

module.exports = db.defineModel('Pets',{

    name:{
        type:db.STRING(100),
        unique:true
    },
   
    gender:db.BOOLEAN

});