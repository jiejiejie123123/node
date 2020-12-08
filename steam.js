const fs = require('fs')
/**
 * 通过流的方式复制图片
 */
const rs = fs.createReadStream('./img.png')
const ws = fs.createWriteStream('./img1.png')
rs.pipe(ws)