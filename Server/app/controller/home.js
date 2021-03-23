"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    this.service.index.test();
    ctx.body = "hi, egg";
  }
  async signup() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const res = this.service.index.insert(ctx.request.body);
    ctx.body = res;
  }

  async contact() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const res = this.service.index.insertContact(ctx.request.body);
    ctx.body = res;
  }

  async partner() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const res = this.service.index.insertPartner(ctx.request.body);
    ctx.body = res;
  }
}

module.exports = HomeController;
