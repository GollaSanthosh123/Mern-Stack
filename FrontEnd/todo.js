const express = require('express');
const {createTodo, getTodos, updateTodo, deleteTodo}  = require('./todoCountroller');

const todoRouter = express.Router();

todoRouter.post('/create', createTodo);
todoRouter.get('/', getTodos);
todoRouter.put('/update/:id', updateTodo);
todoRouter.delete('/delete/:id', deleteTodo);

module.exports = todoRouter;