'use strict'

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const {ctx} = this;
        const {username} = ctx.query;
        ctx.body = username;
    }

    async getId() {
        const {ctx} = this;
        const {id} = ctx.params;
        ctx.body = id;
    }

    async addUser() {
        const {ctx} = this;
        const {name,age} = ctx.request.body;
        ctx.body = {
            name,
            age
        }
    }

    async getUser() {
        const {ctx} = this;
        const {name,age} = await ctx.service.user.user();
        ctx.body = {
            name,age
        }
    }

    async login() {
        const {ctx} = this;
        const {username,password} = ctx.request.body;
        console.log(username);
        ctx.body = {
            username,
            password
        }
    }
}

module.exports = UserController
