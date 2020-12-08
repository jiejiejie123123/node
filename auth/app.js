const Koa = require('koa')
const app = new Koa()
const session = require('koa-session')

app.keys = ['some dsadsaf1']

const redisStore = require('koa-redis')
const redis = require('redis')
const redisClient = redis.createClient(6379,'localhost')

const wraper = require('co-redis')
const client = wraper(redisClient)

// const SESS_CONFIG = {
//     key: 'jjj:sess', //cookie键名
//     maxAge: 86400000, //有效期，默认一天
//     httpOnly: true, //仅服务器修改
//     signed: true, //签名cookie
// };

// // 注册
// app.use(session(SESS_CONFIG, app))

app.use(session({
    key:'jjj:sess',
    store:redisStore({client}) //此处可以不必指定client
},app))

// 打印redis
app.use(async (ctx,next)=>{
    const keys = await client.keys('*')
    keys.forEach(async key => console.log(await client.get(key)));
    await next()
})

// 测试
app.use(ctx => {
    if (ctx.path === '/favicon.ico') return
    // 获取
    let n = ctx.session.count || 0
    // 设置
    ctx.session.count = ++n
    ctx.body = `第${n}次访问`

})

app.listen(3000)