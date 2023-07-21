const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { notFound, errorHandler } = require('./middlewares');
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
  origin: 'http://localhost:3000',
}));

app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.json({
    message: 'You\'re at the homepage now',
  });
});
