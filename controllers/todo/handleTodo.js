const Todo = require('../../models/todo');

const handleTodo = async (operation, id, body) => {
  let todo;
  let error;
  switch (operation) {
    case 'findById':
      todo = await Todo.findById(id);
      break;
    case 'findByIdAndUpdate':
      todo = await Todo.findByIdAndUpdate(id, body, { new: true });
      break;
    case 'findByIdAndDelete':
      todo = await Todo.findByIdAndDelete(id);
      break;
    default:
      error = new Error('Invalid operation');
      error.status = 400;
      throw error;
  }

  if (!todo) {
    error = new Error('Todo not found.');
    error.status = 404;
    throw error;
  }

  return todo;
};

module.exports = handleTodo;
