/* eslint-disable no-useless-constructor */
'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller 用户管理
 */
class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  /**
   * @summary 创建用户
   * @description 创建用户/记录用户账户/密码/类型
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const ctx = this;
    ctx.body = 'Hello World!';
  }
}

module.exports = UserController;
