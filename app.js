// const os = require('os')
// const mem = os.freemem()/os.totalmem()
// console.log(`内存占用率为:${mem.toFixed(2)}%`);

/**
 *  download-git-repo
 */
const { clone } = require('./download')
const repo = 'direct:https://gitlab.com/flippidippi/download-git-repo-fixture/repository/archive.zip'
const desc = 'test/tmp'
clone(repo, desc)


