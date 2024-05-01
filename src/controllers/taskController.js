// src/controllers/taskController.js

const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../models/taskModel');

const createNewTask = (req, res) => {
    const { title, description, status, assignee_id } = req.body;
    const task = createTask(title, description, status, assignee_id);
    res.status(201).json(task);
};

const getAllTasksHandler = (req, res) => {
    const tasks = getAllTasks();
    res.json(tasks);
};

const getTaskByIdHandler = (req, res) => {
    const taskId = req.params.id;
    const task = getTaskById(taskId);
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
};

const updateTaskHandler = (req, res) => {
    const taskId = req.params.id;
    const { title, description, status, assignee_id } = req.body;
    const updatedTask = updateTask(taskId, title, description, status, assignee_id);
    if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.json(updatedTask);
};

const deleteTaskHandler = (req, res) => {
    const taskId = req.params.id;
    deleteTask(taskId);
    res.sendStatus(204);
};

module.exports = {
    createNewTask,
    getAllTasksHandler,
    getTaskByIdHandler,
    updateTaskHandler,
    deleteTaskHandler
};
