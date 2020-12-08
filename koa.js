const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next) => {
    const start = new Date().getTime()
    console.log(`start${ctx.url}`)
    await next()
    const end = new Date().getTime()
    console.log(`本次请求耗时${parseInt(end - start)}ms`);
    console.log('----------------------------------------------------------------------');
})
app.use(async (ctx, next) => {
    ctx.body = [
        {
            name: 'jiejie'
        }
    ]
    await next()
})
app.use((ctx,next)=>{
    console.log(`url:${ctx.url}`);
    if(ctx.url === '/html'){
        ctx.type = 'text/html;charset=utf-8'
        ctx.body = `<h1>我是${ctx.body[0].name}</h1>`
    }
})


app.listen(3000)