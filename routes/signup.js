const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const MongoClient = require('mongodb').MongoClient;
const generateUniqueCollectionName = require('../services/generateUniqueCollectionName');

router.post(
  '/',
  asyncHandler(async (req, res) => {
    try {
      const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);
      await client.connect();

      const userDb = client.db('users'); // Connect to your target database
      const collectionName = await generateUniqueCollectionName(userDb);
      await userDb.createCollection(collectionName);

      const adminDb = client.db('admin'); // Connect to the admin database
      /* await adminDb.command({
        createUser: req.body.name,
        pwd: req.body.password,
        roles: [{ role: 'readWrite', db: 'users' }],
      }); */

      res.send(adminDb.getRoles());
    } catch (error) {
      console.error(error);
      error.status = 500;
      throw error;
    }
  })
);

module.exports = router;
