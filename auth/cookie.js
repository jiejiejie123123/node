const http = require('http')
const session = {}

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.end('')
        return
    }
    const sessionKey = "sid"
    const cookie = req.headers.cookie
    if (cookie && cookie.indexOf(sessionKey) != -1) {
        res.end('welcomeback')
        const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
        const sid = pattern.exec(cookie)[1]
        console.log('session:', sid, session, session[sid]);
    } else {
        // 首次登陆
        const sid = (Math.random() * 999999999).toFixed()
        res.setHeader('Set-Cookie', `${sessionKey}=${sid};`)
        session[sid] = { name: 'jiejiejie' }
        res.end('hello lalalala')
    }

    // console.log('cookie',req.headers.cookie);
    // res.setHeader('Set-Cookie','cookie=lalala')
    // res.end('hello cookie')
})

server.listen(3000)