const http = require('http')
const interval = 1000
setInterval( async () => {
    await http.get('http://localhost:3000')
}, interval);