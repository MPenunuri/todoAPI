// eslint-disable-next-line
module.exports = function missingRouteHandler(req, res, next) {
  const error = new Error('Missing route or invalid method');
  error.status = 404;
  next(error);
};
