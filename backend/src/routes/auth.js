const express = require('express');
const { register, login, getProfile } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');
const { validateRegister, validateLogin } = require('../utils/validation');

const router = express.Router();

// POST /api/auth/register
router.post('/register', validateRegister, register);

// POST /api/auth/login
router.post('/login', validateLogin, login);

// GET /api/auth/profile
router.get('/profile', authenticateToken, getProfile);

module.exports = router;
