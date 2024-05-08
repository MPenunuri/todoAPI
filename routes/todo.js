const express = require('express');
const router = express.Router();

const postTodo = require('../controllers/todo/post.js');
const putTodo = require('../controllers/todo/put.js');
const getTodo = require('../controllers/todo/get.js');
const deleteTodo = require('../controllers/todo/delete.js');

router.post('/', postTodo);
router.put('/:id', putTodo);
router.get('/:id', getTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
