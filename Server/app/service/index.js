const azureConfig = require("../../config/azure");
const keygen = require("keygenerator");
const Service = require("egg").Service;
const databaseId = azureConfig.database.id;
const containerId = azureConfig.container.id;

class IndexService extends Service {
  async test() {
    console.log("----");
    this.app.client.put(
      {
        TableName: "chairshare",
        Item: { form: "1232132", name: "jack", age: 23 },
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      }
    );
    this.ctx.body = "success";
  }
  async insert(data) {
    console.log("-----");
    data.id = keygen._();
    this.app.client.put(
      {
        TableName: "users",
        Item: data,
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      }
    );
    return "success";
  }
  async insertContact(data) {
    console.log("-----");
    data.id = keygen._();
    this.app.client.put(
      {
        TableName: "contacts",
        Item: data,
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      }
    );
    return "success";
  }
  async insertPartner(data) {
    console.log("-----");
    data.id = keygen._();
    this.app.client.put(
      {
        TableName: "partners",
        Item: data,
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      }
    );
    return "success";
  }
}
module.exports = IndexService;
