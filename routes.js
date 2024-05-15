const express = require('express');
const router = express.Router();
const pool = require('./db');

// Get all posts
router.get('/posts', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM posts');
        res.json(rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const query = 'SELECT * FROM users';
        const { rows } = await pool.query(query);
        res.json(rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;






