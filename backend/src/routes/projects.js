const express = require('express');
const {
  createProject,
  getUserProjects,
  getProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const { authenticateToken } = require('../middleware/auth');
const { validateProject } = require('../utils/validation');

const router = express.Router();

// POST /api/projects
router.post('/', authenticateToken, validateProject, createProject);

// GET /api/projects
router.get('/', authenticateToken, getUserProjects);

// GET /api/projects/:id
router.get('/:id', authenticateToken, getProject);

// PUT /api/projects/:id
router.put('/:id', authenticateToken, validateProject, updateProject);

// DELETE /api/projects/:id
router.delete('/:id', authenticateToken, deleteProject);

module.exports = router;
