var config = require("../db.json");
var awsConfig = {
  aws_table_name: "chairshare",
  aws_local_config: {
    //Provide details for local configuration
  },
  aws_remote_config: {
    accessKeyId: config.access_key,
    secretAccessKey: config.access_secret,
    region: "ap-northeast-1",
  },
};

module.exports = awsConfig;
