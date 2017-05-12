const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database,config.usename,config.password,{

    host:config.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
});
//定义model
var Pet = sequelize.define('pet',{
    id:{
        type:Sequelize.STRING(50),
        primaryKey:true
    },
    name:Sequelize.STRING(100),
    gender:Sequelize.BOOLEAN,
    birth:Sequelize.STRING(10),
    createdAt:Sequelize.BIGINT,
    updatedAt:Sequelize.BIGINT,
    version:Sequelize.BIGINT
},{
//关闭Sequelize的自动添加timestamp的功能
    timestamps:false
});

var now = new Date().now;
/*Pet.create({
    id:'g_'+now.getTime(),
    name:'Gaffey',
    gender:false,
    birth:'2007-07-07',
    createdAt:now,
    updatedAt:now,
    version:0
}).then(function(p){

    console.log('created '+JSON.stringify(p));
}).catch(function(err){

    console.log('failed'+err);
});*/
//也可以这样写
(async()=>{

    var dog = await Pet.create({

        id:'d_'+now,
        name:'Odie',
        gender:false,
        birth:now.getDay(),
        createdAt:now,
        updatedAt:now,
        version:0
    });

    console.log('create'+JSON.stringify(dog));
})();

(async()=>{

    var pets = await Pet.findAll({

        where:{

           gender:'false'
        }
    });
    console.log(`find ${pets.length}` );
    for(let p of pets){

        console.log(JSON.stringify(p));
    }
})();


