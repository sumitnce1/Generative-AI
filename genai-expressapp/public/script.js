async function generateContent() {
  const query = document.getElementById("query").value;
  const loader = document.getElementById("loader");
  const responseParagraph = document.getElementById("response");

  if (!query) {
    alert("Please enter a prompt");
    return;
  }

  try {
    // Show loader while fetching data
    loader.style.display = "block";
    responseParagraph.style.display = "none";

    const response = await fetch(
      `/genai?query=${encodeURIComponent(query)}`
    );
    const data = await response.json();

    // Display the response with bold formatting
    responseParagraph.innerHTML = `<span class="response">${data.response}</span>`;
    responseParagraph.style.display = "block"; // Show response paragraph
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to generate content");
  } finally {
    // Hide loader when fetching is done (whether successful or not)
    loader.style.display = "none";
  }
}