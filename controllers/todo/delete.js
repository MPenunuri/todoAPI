const asyncHandler = require('express-async-handler');
const checkTodoId = require('./checkTodoId');
const handleTodo = require('./handleTodo');

module.exports = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  checkTodoId(req, res, next);
  await handleTodo('findByIdAndDelete', id);
  res.status(200).json({ message: 'Deleted.' });
});
