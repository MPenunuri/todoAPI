const asyncHandler = require('express-async-handler');
const checkTodoId = require('./checkTodoId');
const handleTodo = require('./handleTodo');

module.exports = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  checkTodoId(req, res, next);
  const todo = await handleTodo('findById', id);
  res.status(201).send(todo);
});
