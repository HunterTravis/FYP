//importing express
const express = require('express');

//starting express server object
const app = express();

//handled CORS error
const cors = require('cors');
app.use(cors({origin: "*"}));

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);


//making the server listen to port
app.listen(3001, () => {
    console.log(`Server running on port ${3001}`);
});