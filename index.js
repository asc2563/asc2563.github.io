const express = require("express"); // Import Express
const path = require("path"); // Import path module
const app = express(); // Create an Express app
const port = process.env.PORT || 3000; // Set server port

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Route for '/' serving the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
