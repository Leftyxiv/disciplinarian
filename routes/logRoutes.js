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

module.exports = router;