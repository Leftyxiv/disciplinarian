const express = require('express');
const Topic = require('../models/Topic.js');

const catchAsync = require('../utils/catchAsync');

const router = express.Router();

router.get('/', catchAsync(async (req, res) => {
  const topics = await Topic.find({});
  res.status(200).json({
    status: 'success',
    results: topics.length,
    topics,
  });
}));

module.exports = router;