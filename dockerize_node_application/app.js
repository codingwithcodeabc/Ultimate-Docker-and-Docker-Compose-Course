const express = require('express'); // Import Express
const app = express(); // Create an instance of the Express app

const PORT = 5001; // Define the port for the server

// Route for `/code-abc`
app.get('/code-abc', (req, res) => {
    res.send('Welcome to code ABC - a learning platform based on Bangladesh');
});

// Route for `/error`
app.get('/error', (req, res) => {
    throw new Error('Something went wrong!'); // Throw an error
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error
    res.status(500).send('An error occurred: ' + err.message); // Send error response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
