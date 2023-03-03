const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'lunadatabase.ctamnnlwaei2.ap-northeast-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Executionerer123$',
  database: 'lunadatabase'
});

connection.connect();
module.exports = connection;