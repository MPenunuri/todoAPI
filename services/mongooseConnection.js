const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectToDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Succesful connection to mongodb');
};

const asyncHandler = require('express-async-handler');

module.exports = asyncHandler(async (req, res, next) => {
  await connectToDatabase();
  next();
});
