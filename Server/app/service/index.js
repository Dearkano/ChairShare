const keygen = require("keygenerator");
const md5 = require("md5");
const Service = require("egg").Service;

class IndexService extends Service {
  async test() {
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
  async insertOrUpdate(item) {
    const client = this.app.client;
    const params = {
      TableName: "users",
      Key: {
        id: md5(`${item.name}-${item.email}`),
      },
    };
    client.get(params, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        // insert
        if (JSON.stringify(data) === "{}") {
          console.log("insert");
          item.id = md5(`${item.name}-${item.email}`);
          client.put(
            {
              TableName: "users",
              Item: item,
            },
            (err, data1) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data1);
              }
            }
          );
        }
        // update
        else {
          let updateExpression = "set";
          let ExpressionAttributeNames = {};
          let ExpressionAttributeValues = {};
          for (const property in item) {
            if (!item[property]) continue;
            updateExpression += ` #${property} = :${property} ,`;
            ExpressionAttributeNames["#" + property] = property;
            ExpressionAttributeValues[":" + property] = item[property];
          }
          updateExpression = updateExpression.substring(
            0,
            updateExpression.length - 1
          );
          console.log("=======");
          console.log(ExpressionAttributeNames);
          console.log(ExpressionAttributeValues);
          client.update(
            {
              TableName: "users",
              Key: {
                id: md5(`${item.name}-${item.email}`),
              },
              UpdateExpression: updateExpression,
              ExpressionAttributeNames: ExpressionAttributeNames,
              ExpressionAttributeValues: ExpressionAttributeValues,
              ReturnValues: "UPDATED_NEW",
            },
            (err, data1) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data1);
              }
            }
          );
        }
      }
    });

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

  async getUsers() {
    const data = await this.app.client.scan({ TableName: "users" }).promise();
    return data.Items;
  }
  async getPartners() {
    const data = await this.app.client
      .scan({ TableName: "partners" })
      .promise();
    return data.Items;
  }
  async getContacts() {
    const data = await this.app.client
      .scan({ TableName: "contacts" })
      .promise();
    return data.Items;
  }
  async getMatching(id) {
    const params = {
      TableName: "users",
      Key: {
        id: "5a103ab0d1f9c8b004c3c6c17265f16e",
      },
    };
    const data = await this.app.client.get(params).promise();
    return data;
  }
}
module.exports = IndexService;
