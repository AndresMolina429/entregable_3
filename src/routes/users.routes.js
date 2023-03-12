const { Router } = require('express');
const { createUser, getUserTodos } = require('../controlers/users.controlers');

const router = Router();

router.post('/api/v1/users', createUser)
router.get('/api/v1/users/:id/todos', getUserTodos)

module.exports = router;
