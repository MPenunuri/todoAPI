const Todo = require('../../models/todo');
const asyncHandler = require('express-async-handler');

module.exports = asyncHandler(async (req, res) => {
  const body = req.body;
  const todo = await Todo.create(body);
  res.status(201).send(todo);
});
