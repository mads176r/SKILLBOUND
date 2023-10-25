const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'db-mysql-lon1-32734-do-user-14794698-0.b.db.ondigitalocean.com',
  user: 'doadmin',
  password: 'AVNS_2BBLS1nXuNDsbIGjDiO',
  port: 25060,
  database: 'defaultdb',
  ssl: {
    mode: 'REQUIRED',
    rejectUnauthorized: false, // Trust self-signed certificate
  }
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
  // Perform database operations here
});

module.exports = db;