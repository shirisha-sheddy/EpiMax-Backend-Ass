const crypto = require('crypto');

// Generate a random 32-byte buffer
const buffer = crypto.randomBytes(32);

// Convert buffer to base64 string
const secretKey = buffer.toString('base64');

console.log('Generated Secret Key:', secretKey);
