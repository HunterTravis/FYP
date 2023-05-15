const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'lunadatabase.cm9ef8sa0y4d.eu-north-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Executionerer123$',
  database: 'lunadatabase'
});

connection.connect();
module.exports = connection;