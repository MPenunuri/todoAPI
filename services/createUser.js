module.exports = async function createUser(db, collection, name, psw) {
  db.createUser({
    user: name,
    pwd: psw,
    roles: [{ role: 'readWrite', db: db, collection: collection }],
  });
};
