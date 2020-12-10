const Service = require('egg').Service
class UserService extends Service {
    /**
     * @param {*} payload
     */
    async create(payload){
        const {ctx} = this
        payload.passowrd = await this.ctx.genHash(payload.passowrd)
        return ctx.model.User.create(payload)
    }
}
module.exports = UserService