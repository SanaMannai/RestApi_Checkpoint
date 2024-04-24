const express =require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require('./routes/userRoutes');

const app = express();

const port =process.env.port || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.listen(port, (err) => {
    if (err) {
        console.error(err.message); // corrected
    }
    console.log('Server is running successfully on port ' + port);
});

