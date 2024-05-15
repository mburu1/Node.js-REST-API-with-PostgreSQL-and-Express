const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // Replace 'your_postgres_user' with your actual PostgreSQL username
    host: 'localhost', // If your database is hosted locally
    database: 'BlogAPI', // Name of your PostgreSQL database
    password: '', // Password for your PostgreSQL user
    port: 5432, // Port on which PostgreSQL is running. Default port is 5432
});

module.exports = pool;
