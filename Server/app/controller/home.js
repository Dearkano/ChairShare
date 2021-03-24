"use strict";

const Controller = require("egg").Controller;
const sha256 = require("sha256");

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

  async getUsers() {
    const { ctx } = this;
    const res = await this.service.index.getUsers();
    ctx.body = res;
  }
  async getContacts() {
    const { ctx } = this;
    const res = await this.service.index.getContacts();
    ctx.body = res;
  }
  async getPartners() {
    const { ctx } = this;
    const res = await this.service.index.getPartners();
    ctx.body = res;
  }
  async login() {
    const { pwd } = this.ctx.request.body;
    if (
      sha256(pwd) ===
      "b38c186acb9d858e6c29fffb2f37293df149abaf263d7010d12a9afbf177a77d"
    ) {
      this.ctx.status = 200;
    } else {
      this.ctx.status = 401;
    }
  }
}

module.exports = HomeController;
