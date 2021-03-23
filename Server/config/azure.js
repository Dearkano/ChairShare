var config = require("../db.json");
var azureConfig = {};
azureConfig.endpoint = "https://vayne.documents.azure.com:443/";
azureConfig.key = config.azure_key;

azureConfig.database = {
  id: "chairshare",
};

azureConfig.container = {
  id: "users",
};
module.exports = azureConfig;
