const MongoClient = require('mongodb').MongoClient;

module.exports = async function connectToDB(dbName) {
  const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);
  await client.connect();
  return client.db(dbName);
};
