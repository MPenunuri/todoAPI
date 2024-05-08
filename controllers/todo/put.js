const asyncHandler = require('express-async-handler');
const checkTodoId = require('./checkTodoId');
const handleTodo = require('./handleTodo');

module.exports = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  checkTodoId(req, res, next);
  const body = req.body;
  const todo = await handleTodo('findById', id, body);
  res.status(200).json(todo);
});
