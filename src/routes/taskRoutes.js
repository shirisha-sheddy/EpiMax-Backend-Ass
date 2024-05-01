// src/routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/authMiddleware');
const { createNewTask, getAllTasksHandler, getTaskByIdHandler, updateTaskHandler, deleteTaskHandler } = require('../controllers/taskController');

router.post('/', authenticateUser, createNewTask);
router.get('/', authenticateUser, getAllTasksHandler);
router.get('/:id', authenticateUser, getTaskByIdHandler);
router.put('/:id', authenticateUser, updateTaskHandler);
router.delete('/:id', authenticateUser, deleteTaskHandler);

module.exports = router;
