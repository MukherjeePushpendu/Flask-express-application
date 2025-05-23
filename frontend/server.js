const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Example route that calls the Flask backend
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/');
    res.send(`<h1>Frontend says:</h1><p>${response.data.message}</p>`);
  } catch (error) {
    res.status(500).send('Error connecting to Flask backend');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express frontend running at http://localhost:${PORT}`);
});
