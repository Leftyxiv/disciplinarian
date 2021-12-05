const express = require('express');
const LogEntry = require('../models/LogEntry.js');

const catchAsync = require('../utils/catchAsync.js');

const router = express.Router();

router.get('/', catchAsync(async (req, res, next) => {
  console.log(req.subtopic, 'yayayaya');
  const logs = await LogEntry.find({ parent_id: req.subtopic }); // { parent_id: req.subtopic }
  res.status(200).json({
    status: 'success',
    results: logs.length,
    data: {
      logs
    }
  });
}));

router.post('/', catchAsync(async (req, res, next) => {
  Object.assign(req.body, { parent_id: req.subtopic });
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

router.get('/:logId', catchAsync(async (req, res, next) => {
  const log = await LogEntry.findById(req.params.logId);
  if (!log) {
    return res.status(404).json({
      status: 'fail',
      message: 'Log entry not found'
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      log
    }
  });
}));

router.patch('/:logId', catchAsync(async (req, res, next) => {
  const updatedLog = await LogEntry.findByIdAndUpdate(req.params.logId, req.body);
  if (!updatedLog) {
    return res.status(404).json({
      status: 'fail',
      message: 'Log entry not found'
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      updatedLog
    }
  });
}));

router.delete('/:logId', catchAsync(async (req, res, next) => {
  const deletedLog = await LogEntry.findByIdAndDelete(req.params.logId);
  if (!deletedLog) {
    return res.status(404).json({
      status: 'fail',
      message: 'Log entry not found'
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      deletedLog
    }
  });
}));

module.exports = router;