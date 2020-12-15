const cluster = require('cluster')
const os = require('os')
const numCPUs = os.cpus().length
const process = require('process')

console.log('numCPUs', numCPUs);
const workers = {}
if (cluster.isMaster) {
    // 开启多个线程
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork()
        workers[worker.pid] = worker
    }
    // 设置异常监听
    cluster.on('death', (worker) => {
        worker = cluster.fork()
        workers[worker.pid] = worker
    })
} else {
    const app = require('./app')
    app.use(async (ctx, next) => {
        console.log('worker' + cluster.worker.id + ',PID' + process.pid);
        await next()
    })
    app.listen(3000)
}
process.on('SIGTERM', () => {
    for (const pid in workers) {
        process.kill(pid)
    }
    process.exit(0)
})
require('./test')