
const express = require('express');
const router = express.Router();
const userHandlers = require('../handlers/userHandlers');

router.get('/', userHandlers.getAllUsers);
router.post('/', userHandlers.createUser);
router.put('/:id', userHandlers.updateUser);
router.delete('/:id', userHandlers.deleteUser);

module.exports = router;
