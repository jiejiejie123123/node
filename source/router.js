class Router{
    constructor (){
        this.stack = []
    }
    register(path,methods,middleware){
        let route = {path,methods,middleware}
        this.stack.push(route)
    }
    // 目前只支持get和post,其他同理
    get(path,middleware){
        this.register(path,'get',middleware)
    }
    post(path,middleware){
        this.register(path,'post',middleware)
    }
    routes(){
        let stack = this.stack
        return async function (ctx,next){
            let currentPath = ctx.url
            let route
            for (let index = 0; index < stack.length; index++) {
                let item = stack[index]
                if(currentPath === item.path && item.methods.indexOf(ctx.method) != -1 ){
                    // 判断path和method
                    route = item.middleware
                    break
                }
            }
            if(typeof route == 'function') {
                route(ctx,next)
                return
            }
            await next()
        }
    }
}
module.exports = Router