'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test',controller.home.test);
  //get
  router.get('/user',controller.user.index);//http://127.0.0.1:7001/user?username=app
  router.get('/getId/:id',controller.user.getId);//http://127.0.0.1:7001/getId/999
  //post
  router.post('/add',controller.user.addUser);

  //get from database
  router.get("/getUser",controller.user.getUser);

  router.post('login',controller.user.login);
};
