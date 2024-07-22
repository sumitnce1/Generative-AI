## Generative AI with Gemini

This repository provides a starting point for full-stack developers to explore Google's Generative AI model, Gemini.

### Getting Started

This guide walks you through setting up and using Gemini for content generation.

**Prerequisites:**

* Node.js and npm (or yarn) installed
* A Google Cloud Platform (GCP) project with the Gemini API enabled
* An API key obtained from your GCP project

**Installation:**

1. Create a new project directory:

```bash
mkdir my-generative-ai-project
cd my-generative-ai-project
```

2. Initialize a Node.js project:

```bash
npm init -y
```

3. Install the `@google/generative-ai` package:

```bash
npm install @google/generative-ai
```

### Setting Up the API Key

1. Replace `YOUR_API_KEY` with your actual API key in the `genai.js` file:

```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = "YOUR_API_KEY";
const genAI = new GoogleGenerativeAI(API_KEY);

// ... rest of your code
```

**Important:**  **Do not share your API key publicly.**

### Running the Code

1. Create a file named `genai.js` with the following code:

```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = "YOUR_API_KEY";
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateContent() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});

  const result = await model.generateContent(
    "Who has developed first super computer in india?"
  );

  console.log(result.response.text());
}

generateContent();
```

2. Run the code using Node.js:

```bash
node genai.js
```

This will generate content based on the prompt and print the response to the console.

### Documentation

* Official Google Generative AI Documentation: [https://ai.google/discover/generativeai/](https://ai.google/discover/generativeai/)
* Vertex AI Studio for Tutorials and Examples: [https://cloud.google.com/generative-ai-studio](https://cloud.google.com/generative-ai-studio)

### Next Steps

* Experiment with different prompts and models to explore Gemini's capabilities.
* Learn advanced prompt formatting for specific content generation tasks.
* Integrate Gemini with your full-stack development projects for innovative applications.


This is a basic guide to get you started. Remember to explore the official documentation and tutorials for in-depth learning and advanced implementations.
