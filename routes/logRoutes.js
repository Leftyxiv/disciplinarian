const express = require('express');
const LogEntry = require('../models/LogEntry.js');

const catchAsync = require('../utils/catchAsync.js');

const router = express.Router();

router.get('/', catchAsync(async (req, res, next) => {
  const logs = await LogEntry.find();
  res.status(200).json({
    status: 'success',
    results: logs.length,
    data: {
      logs
    }
  });
}));

router.post('/', catchAsync(async (req, res, next) => {
  req.body.parent_id = req.subtopicId;
  const newLog = await LogEntry.create(req.body);
  if (!newLog) {
    return res.status(400).json({
      status: 'fail',
      message: 'Log entry not created'
    });
  }
  res.status(201).json({
    status: 'success',
    data: {
      newLog
    }
  });
}));

module.exports = router;