const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = "your api key";
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateContent() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});

  const result = await model.generateContent(
    "Who created India's first supercomputer?"
  );

  console.log(result.response.text());
}

generateContent();