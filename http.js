const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
    const { url, method,headers } = req
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'Text/html')
            res.end(data)
        })
    } else if (url === '/user' && method === 'GET') {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify({
            name: 'jiejiejie'
        }))
    }else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
        fs.createReadStream('./'+url).pipe(res)
    }
})
server.listen(3000)