'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test',controller.home.test);
  //get
  router.get('/user',controller.user.index);
  router.get('/getId/:id',controller.user.getId);
  //post
  router.post('/add',controller.user.addUser);

  //get from database
  router.get("/getUser",controller.user.getUser);
};
