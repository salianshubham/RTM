const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
app.use(cookieParser());
require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'));
app.listen(4000, () => {
    console.log('Server running on port 3000');
})


