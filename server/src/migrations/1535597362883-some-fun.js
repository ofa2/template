/* eslint-disable */
const { MongoClient } = require('mongodb');
// 动态导入 import 暂时不支持
const { default: config } = require(`../config/env/${process.env.NODE_ENV || 'development'}`);
const mongoUri = require('mongodb-uri').format(config.connections.faceCountMongo);
/* eslint-enable */

/* eslint-disable no-console */

let db;


async function up(next) {
  /* u need do next steps
  1. in package.json, add "script":
     "migrate-dev": "./node_modules/.bin/babel-node src/migrate",
  2. yarn add mongodb@2.1.6
  3. yarn add --dev migrate@0.2.3
  4. complete this file functions
  */
  throw new Error('if u need migrate, u need complete this file');

  /*
  db = await MongoClient.connect(mongoUri);
  db.collection('xxxxx').createIndex({ xxxx: 1 }, { unique: true });
  */
}

function down(next) {
  next(new Error('irreversible'));
}

module.exports = { up, down };
