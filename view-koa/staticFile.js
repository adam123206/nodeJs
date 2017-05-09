const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');

function statiFiles(url,dir){

    return async(ctx,next)=>{

        let rpath = ctx.request.path;

        if(rpath.startWith(url)){

            let fp = path.join(dir,rpath.subString(url.length));
            
            if(await fs.exists(fp)){

                ctx.response.type = mime.lookup(rpath);

                ctx.response.body = await fs.readFile(fp);
            }else{

                ctx.response.status=404;
            }
     }else{

         await next();
     }
    }
}

module.exports = statiFiles;