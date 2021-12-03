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

router.post('/', catchAsync(async (req, res) => {
  const newTopic = await Topic.create(req.body);
  if (!newTopic) {
    return res.status(400).json({
      status: 'fail',
      message: 'Topic not created',
    });
  }
  res.status(201).json({
    status: 'success',
    data: {
      topic: newTopic,
    },
  });
}));

router.patch('/:topicId', catchAsync(async (req, res) => {
  const updatedTopic = await Topic.findByIdAndUpdate(req.params.topicId, req.body);
  if (!updatedTopic) {
    return res.status(404).json({
      status: 'fail',
      message: 'Topic not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      topic: updatedTopic,
    },
  });
}));

module.exports = router;