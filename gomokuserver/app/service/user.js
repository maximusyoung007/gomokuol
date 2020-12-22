'use strict'

const Service = require('egg').Service;

class UserService extends Service {
    async user() {
        return {
            name: "maximus",
            age: "24"
        }
    }
}

module.exports = UserService
