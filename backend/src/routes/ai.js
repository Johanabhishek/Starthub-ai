const express = require('express');
const {
  generateText,
  getInteractionHistory,
  deleteInteraction,
} = require('../controllers/aiController');
const { authenticateToken } = require('../middleware/auth');
const { validateAIGeneration } = require('../utils/validation');

const router = express.Router();

// POST /api/ai/generate-text
router.post('/generate-text', authenticateToken, validateAIGeneration, generateText);

// GET /api/ai/interactions
router.get('/interactions', authenticateToken, getInteractionHistory);

// DELETE /api/ai/interactions/:id
router.delete('/interactions/:id', authenticateToken, deleteInteraction);

module.exports = router;
