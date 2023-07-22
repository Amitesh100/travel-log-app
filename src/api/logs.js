const { Router } = require('express');
const LogEntry = require('../models/LogEntry');

const router = Router();

// route for getting all the log entries
router.get('/', async (req, res, next) => {
  try {
    const allLogs = await LogEntry.find();
    res.json(allLogs);
  } catch (error) {
    next(error);
  }
});

// creating a new log entry
router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

/*
// updating a log entry
router.put('/', async (req, res, next) => {
  const id = req.body;
  try {
    const updatedLog = await LogEntry.findByIdAndUpdate(id, );
  } catch (error) {
  }
})
*/

module.exports = router;
