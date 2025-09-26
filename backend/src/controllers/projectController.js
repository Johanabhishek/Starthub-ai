const { validationResult } = require('express-validator');
const Project = require('../models/Project');

const createProject = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;
    const userId = req.user.id;

    const project = await Project.create(userId, name, description);

    res.status(201).json({
      message: 'Project created successfully',
      project,
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getUserProjects = async (req, res) => {
  try {
    const userId = req.user.id;
    const projects = await Project.findByUserId(userId);

    res.json({
      projects,
    });
  } catch (error) {
    console.error('Get user projects error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Check if user owns the project
    if (project.user_id !== req.user.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    res.json({
      project,
    });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateProject = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { name, description } = req.body;

    // Check if project exists and user owns it
    const existingProject = await Project.findById(id);
    if (!existingProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    if (existingProject.user_id !== req.user.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const updatedProject = await Project.update(id, name, description);

    res.json({
      message: 'Project updated successfully',
      project: updatedProject,
    });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if project exists and user owns it
    const existingProject = await Project.findById(id);
    if (!existingProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    if (existingProject.user_id !== req.user.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    await Project.delete(id);

    res.json({
      message: 'Project deleted successfully',
    });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createProject,
  getUserProjects,
  getProject,
  updateProject,
  deleteProject,
};
