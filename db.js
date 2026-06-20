const mysql = require('mysql2/promise'); // Use the promise version of mysql2

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',  // Replace with your database host
    user: 'root',       // Your MySQL username
    password: 'Pandu@785',  // Your MySQL password
    database: 'project', // Your MySQL database name
    waitForConnections: true,
    connectionLimit: 120,
    queueLimit: 0
});

// Export the pool
module.exports = pool; // You can directly export the promise-based pool
