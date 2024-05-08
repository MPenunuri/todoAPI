const { v4: uuidv4 } = require('uuid');

async function generateUniqueCollectionName(db) {
  let collectionName;
  let collectionExists;
  do {
    collectionName = uuidv4();
    collectionExists = await db
      .listCollections({ name: collectionName })
      .hasNext();
  } while (collectionExists);

  return collectionName;
}

module.exports = generateUniqueCollectionName;
