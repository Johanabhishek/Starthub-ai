const express = require('express');
const { updateProfile, deleteAccount } = require('../controllers/userController');
const { authenticateToken } = require('../middleware/auth');
const { validateUpdateProfile } = require('../utils/validation');

const router = express.Router();

// PUT /api/users/profile
router.put('/profile', authenticateToken, validateUpdateProfile, updateProfile);

// DELETE /api/users/account
router.delete('/account', authenticateToken, deleteAccount);

module.exports = router;
