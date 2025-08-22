const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('./middlewares/rateLimit');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use('/uploads', express.static('uploads'));

app.use('/api/v1/auth', rateLimit, require('./routes/auth.routes'));
app.use('/api/v1/videos', require('./routes/video.routes'));
app.use('/api/v1/history', require('./routes/history.routes'));
app.use('/api/v1/watch-later', require('./routes/watchLater.routes'));

app.use(errorHandler);

module.exports = app;
