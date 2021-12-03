const express = require('express');

const Topic = require('../models/Topic.js');
const catchAsync = require('../utils/catchAsync');
const subtopicRoutes = require('./subtopicRoutes');

const router = express.Router();

router.use('/:topicId/subtopics', (req, res, next) => {
  req.topic = req.params.topicId;
  next();
}, subtopicRoutes);

router.get('/', catchAsync(async (req, res) => {
  const topics = await Topic.find({});
  res.status(200).json({
    status: 'success',
    results: topics.length,
    topics,
  });
}));

router.get('/:userId', catchAsync(async (req, res) => {
  const topics = await Topic.find({ parent_id: req.params.userId });
  res.status(200).json({
    status: 'success',
    results: topics.length,
    topics,
  });
}));

router.post('/', catchAsync(async (req, res) => {
  console.log(req.body);
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

router.get('/:topicId', catchAsync(async (req, res) => {
  const topic = await Topic.findById(req.params.topicId);
  if (!topic) {
    return res.status(404).json({
      status: 'fail',
      message: 'Topic not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      topic,
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

router.delete('/:topicId', catchAsync(async (req, res) => {
  const deletedTopic = await Topic.findByIdAndDelete(req.params.topicId);
  if (!deletedTopic) {
    return res.status(404).json({
      status: 'fail',
      message: 'Topic not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      topic: deletedTopic,
    },
  });
}));

module.exports = router;