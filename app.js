const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
const postRoutes = require('./routes'); // Correcting the file name
app.use('/api', postRoutes); // Correcting the variable name

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
