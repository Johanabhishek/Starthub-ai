const mongoose = require('mongoose');

const AIInteractionSchema = new mongoose.Schema({
  userId: {
    type: String, // Storing as String to match PostgreSQL UUID
    required: true,
    index: true,
  },
  projectId: {
    type: String, // Storing as String to match PostgreSQL UUID
    required: false, // AI interactions might not always be tied to a specific project
    index: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['text_generation', 'image_generation', 'code_generation', 'chat', 'other'],
  },
  prompt: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed, // Flexible field for additional AI-specific data
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AIInteraction', AIInteractionSchema);
