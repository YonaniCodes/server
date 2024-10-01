// Import the express module
const express = require('express');
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello,Yoani Awoke');
});

// Set the port the server will listen on
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
