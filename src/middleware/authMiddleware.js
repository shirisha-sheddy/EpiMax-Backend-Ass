// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const { findUserByUsername } = require('../models/userModel');
const { JWT_SECRET } = process.env;

const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = {
    authenticateUser
};
