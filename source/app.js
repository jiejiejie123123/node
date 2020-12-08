const KKB = require('./kkb')
const app = new KKB()
// app.use((req,res)=>{
//     res.writeHead(200)
//     res.end('hello World')
// })

// app.use(ctx=>{
//     ctx.body = 'hahaha'
// })
/**
 * 中间件的实现
 */
// const delay = () => Promise.resolve(resolve=>setTimeout(()=>resolve(),2000))
// app.use(async (ctx,next)=>{
//     ctx.body = '1'
//     await next()
//     ctx.body += '5' 
// })

// app.use(async (ctx,next)=>{
//     ctx.body += '2'
//     await delay()
//     await next()
//     ctx.body += '4' 
// })

// app.use(async (ctx,next)=>{
//     ctx.body += '3'
// })

/**
 * router
 */
// const Router = require('./router')
// const router = new Router()
// router.get('/index',async (ctx)=> {ctx.body = 'index page'})
// router.post('/post',async (ctx)=> {ctx.body = 'post page'})
// router.get('/list',async (ctx)=> {ctx.body = 'list page'})
// router.post('/index',async (ctx)=> {ctx.body = 'post page'})
// // 输出父中间件 router.routes()
// app.use(router.routes())


/**
 * static
 */

const static = require('./static')
app.use(static(__dirname + '/public'))

app.listen(3000, () => {
    console.log('listen port at http://localhost:3000');
})