'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};

exports.cors = {
    enable:true,
    package:'egg-cors'
}

exports.cors = {
    enable: true,
    package: 'egg-mysql'
}

exports.mysql = {
    client: {
        host: '106.14.44.210',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'gomoku'
    },
    app: true,
    agent: false
}
