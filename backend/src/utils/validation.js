const { body } = require('express-validator');

const validateRegister = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage('Username must be between 3 and 50 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one number'),
];

const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];

const validateUpdateProfile = [
  body('username')
    .optional()
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage('Username must be between 3 and 50 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  
  body('email')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
];

const validateProject = [
  body('name')
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('Project name must be between 1 and 255 characters'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Description must not exceed 1000 characters'),
];

const validateAIGeneration = [
  body('prompt')
    .trim()
    .isLength({ min: 1, max: 2000 })
    .withMessage('Prompt must be between 1 and 2000 characters'),
  
  body('projectId')
    .optional()
    .isUUID()
    .withMessage('Project ID must be a valid UUID'),
];

module.exports = {
  validateRegister,
  validateLogin,
  validateUpdateProfile,
  validateProject,
  validateAIGeneration,
};
