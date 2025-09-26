const { validationResult } = require('express-validator');
const User = require('../models/User');

const updateProfile = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email } = req.body;
    const userId = req.user.id;

    // Check if email is already taken by another user
    if (email !== req.user.email) {
      const existingUser = await User.findByEmail(email);
      if (existingUser && existingUser.id !== userId) {
        return res.status(400).json({ error: 'Email already taken by another user' });
      }
    }

    const updatedUser = await User.update(userId, username, email);

    res.json({
      message: 'Profile updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.id;
    await User.delete(userId);

    res.json({
      message: 'Account deleted successfully',
    });
  } catch (error) {
    console.error('Delete account error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  updateProfile,
  deleteAccount,
};
