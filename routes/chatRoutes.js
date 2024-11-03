const express = require('express');
const dotenv = require('dotenv');
const OpenAI = require("openai");

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/chat', async (req, res) => {
    try {
      const { prompt } = req.body;
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",  // Use general model instead of a specific version
        messages: [{ role: "user", content: prompt }],  // Use 'user' role for prompt
        temperature: 1,
        max_tokens: 500,  // Reduce max tokens to conserve usage
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
  
      res.send(response.choices[0].message.content);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

module.exports = router;
