const mongoose = require('mongoose');

module.exports = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('Invalid todo ID');
    error.status = 400;
    return next(error);
  }
};
