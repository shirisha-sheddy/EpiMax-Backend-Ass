// src/models/userModel.js

const bcrypt = require('bcryptjs');

// Mock user data
let users = [];

const createUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, username, password: hashedPassword };
    users.push(newUser);
    return newUser;
};

const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
};

module.exports = {
    createUser,
    findUserByUsername
};
