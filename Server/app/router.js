"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.post("/signup", controller.home.signup);
  router.post("/contact", controller.home.contact);
  router.post("/partner", controller.home.partner);
  router.get("/getUsers", controller.home.getUsers);
  router.get("/getPartners", controller.home.getPartners);
  router.get("/getContacts", controller.home.getContacts);
  router.post("/login", controller.home.login);
};
