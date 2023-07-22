const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { notFound, errorHandler } = require('./middlewares');
const logsRouter = require('./api/logs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 1337;

// Connection to the database

mongoose.connect(process.env.MONGO_URL).then(
  app.listen(port, () => {
    console.log('Server started!');
  }),
);

// Setting up the middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.use('/api/logs', logsRouter);
app.use(notFound);
app.use(errorHandler);
