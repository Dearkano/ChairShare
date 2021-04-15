"use strict";

const Controller = require("egg").Controller;
const sha256 = require("sha256");
const aws = require("aws-sdk");

const { generateUUID } = require("../utils/helper");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    this.service.index.test();
    ctx.body = "hi, egg";
  }
  async signup() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const res = this.service.index.insertOrUpdate(ctx.request.body);
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

  async presign() {
    const { type } = this.ctx.query;
    const s3 = new aws.S3();
    const S3_BUCKET = "mychairshare";

    const fileName = `${generateUUID()}.${type.split("/")[1]}`; // create a unique file name
    // const fileType = contentType; // the content-type of the file
    const s3Params = {
      Bucket: S3_BUCKET,
      Fields: {
        key: fileName,
      },
      Conditions: [["content-length-range", 0, 1024 * 1024 * 15]],
      ContentType: type,
    };

    const data = s3.createPresignedPost(s3Params);
    this.ctx.body = data;
  }
}

module.exports = HomeController;
