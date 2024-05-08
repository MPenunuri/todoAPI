const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const Todo = require('../models/todo.js');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json(todos);
  })
);

module.exports = router;
