const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { notFound, errorHandler } = require('./middlewares');

// Setting up the middlewares
const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
}));

const port = process.env.PORT || 1337;

app.get('/', (req, res) => {
  res.json({
    message: 'You\'re at the homepage now',
  });
});

// Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
