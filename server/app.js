const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const user = require('./routes/user');

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));
app.use('/api/erp',user);


module.exports = app;