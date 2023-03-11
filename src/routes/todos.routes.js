const { Router } = require('express');
const { createTodos, updateStatusTodos, deleteTodos } = require('../controlers/todos.controlers');

const router = Router();

router.post('/api/v1/todos', createTodos)
router.put('/api/v1/todos/:id', updateStatusTodos)
router.delete('/api/v1/todos/:id', deleteTodos)

module.exports = router;