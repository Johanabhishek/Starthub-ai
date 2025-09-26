const { validationResult } = require('express-validator');
const axios = require('axios');
const AIInteraction = require('../models/AIInteraction');

const generateText = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { prompt, projectId } = req.body;
    const userId = req.user.id;

    // Call OpenAI API
    const openaiResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const aiResponse = openaiResponse.data.choices[0].message.content;

    // Save interaction to MongoDB
    const interaction = new AIInteraction({
      userId,
      projectId: projectId || null,
      type: 'text_generation',
      prompt,
      response: aiResponse,
      metadata: {
        model: 'gpt-3.5-turbo',
        tokens_used: openaiResponse.data.usage.total_tokens,
      },
    });

    await interaction.save();

    res.json({
      response: aiResponse,
      interaction_id: interaction._id,
    });
  } catch (error) {
    console.error('Generate text error:', error);
    
    if (error.response && error.response.status === 401) {
      return res.status(500).json({ error: 'OpenAI API key not configured or invalid' });
    }
    
    res.status(500).json({ error: 'Failed to generate text' });
  }
};

const getInteractionHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const { projectId, type, limit = 20, page = 1 } = req.query;

    const filter = { userId };
    if (projectId) filter.projectId = projectId;
    if (type) filter.type = type;

    const interactions = await AIInteraction.find(filter)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await AIInteraction.countDocuments(filter);

    res.json({
      interactions,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    console.error('Get interaction history error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteInteraction = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const interaction = await AIInteraction.findOne({ _id: id, userId });
    if (!interaction) {
      return res.status(404).json({ error: 'Interaction not found' });
    }

    await AIInteraction.findByIdAndDelete(id);

    res.json({
      message: 'Interaction deleted successfully',
    });
  } catch (error) {
    console.error('Delete interaction error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  generateText,
  getInteractionHistory,
  deleteInteraction,
};
