// src/models/taskModel.js

// Mock task data
let tasks = [];

const createTask = (title, description, status, assignee_id) => {
    const newTask = { id: tasks.length + 1, title, description, status, assignee_id, created_at: new Date(), updated_at: new Date() };
    tasks.push(newTask);
    return newTask;
};

const getAllTasks = () => {
    return tasks;
};

const getTaskById = (id) => {
    return tasks.find(task => task.id === parseInt(id));
};

const updateTask = (id, title, description, status, assignee_id) => {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], title, description, status, assignee_id, updated_at: new Date() };
        return tasks[taskIndex];
    }
    return null;
};

const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== parseInt(id));
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};
