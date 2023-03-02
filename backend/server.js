//importing express
const express = require('express');
//starting express server object
const app = express();
//creating mysql connection
const connection = require('./connection.js');

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// const query = "SHOW TABLES;";
// connection.query(query, (error, results, fields) => {
//     if (error) throw error;
  
//     console.log(results);
//   });


//making the server listen to port
app.listen(3001, () => {
    console.log(`Server running on port ${3001}`);
});