const jwt = require('jsonwebtoken');

const payload = { userId: 123 };
const secretKey = 'your-secret-key';

const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
console.log('Token:', token);

try {
    const decoded = jwt.verify(token, secretKey);
    console.log('Decoded:', decoded);
} catch (error) {
    console.error('Verification failed:', error.message);
}