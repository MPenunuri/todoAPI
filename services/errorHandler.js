// eslint-disable-next-line
module.exports = function errorHandler(err, req, res, next) {
  console.error(err.stack);
  return res.status(err.status || 500).send(err.message || 'Server error');
};
