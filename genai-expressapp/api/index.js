const express = require("express");
const { marked } = require("marked");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your actual API key
const API_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Serve static files from the "public" directory
app.use(express.static("public"));

// Route for generating content
app.get("/genai", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ error: "Query parameter is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent(query);
    const generatedContent = result.response.text();

    // Convert generated content to Markdown using 'marked'
    const markdownContent = marked(generatedContent);

    // Send the Markdown content as JSON response
    res.json({ response: markdownContent });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Failed to generate content" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running...:${PORT}`);
});