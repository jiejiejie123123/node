const fs = require('fs')
const path = require('path')

module.exports = (dirpath = './public')=>{
    return async (ctx,next) =>{
        if(ctx.url.indexOf("/public") === 0){
            // public开头 读取文件
            const url = path.resolve(__dirname,dirpath)
            const fileBaseName = path.basename(url)
            const filepath = url + ctx.url.replace("/public",'')
            console.log(filepath);
            try{
                stats = fs.statSync(filepath)
                if(stats.isDirectory()){
                    const dir = fs.readdirSync(filepath)
                    const ret = ['<div style="padding-left:20px">']
                    dir.forEach(filename=>{
                        console.log(filename);
                        // 简单认为不带小数点的格式就是文件夹，实际应该用statSync
                        if(filename.indexOf('.')!=-1){
                            ret.push(
                                `<p><a style="color:black" href"${ctx.url}/${filename}">${filename}</a></p>`
                            )
                        }else{
                            //文件
                            ret.push( `<p><a href"${ctx.url}/${filename}">${filename}</a></p>`)
                        }
                    })
                    ret.push('</div>')
                    ctx.body = ret.join("")
                }else{
                    console.log("文件");
                    const content = fs.readFileSync(filepath)
                    ctx.body = content
                }
            }catch(e){
                //文件不存在
                ctx.body = "404 not found"
            }
        }else{
            //否则不是静态资源 去下一个中间件
            await next()
        }
    }
}