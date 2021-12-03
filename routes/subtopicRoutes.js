const express = require('express');

const SubTopic = require('../models/SubTopic.js');
const catchAsync = require('../utils/catchAsync.js');

const router = express.Router();

router.get('/', catchAsync(async (req, res, next) => {
  const subTopics = await SubTopic.find();
  res.status(200).json({
    status: 'success',
    results: subTopics.length,
    data: {
      subTopics
    }
  });
}));

router.post('/', catchAsync(async (req, res, next) => {
  req.body.parent_id = req.topic;
  const subTopic = await SubTopic.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      subTopic
    }
  });
}));

router.get('/:subtopicId', catchAsync(async (req, res, next) => {
  const subTopic = await SubTopic.findById(req.params.subtopicId);
  res.status(200).json({
    status: 'success',
    data: {
      subTopic
    }
  });
}));

router.patch('/:subtopicId', catchAsync(async (req, res, next) => {
  const subTopic = await SubTopic.findByIdAndUpdate(req.params.subtopicId, req.body);
  if (!subTopic) {
    return res.status(404).json({
      status: 'fail',
      message: 'Subtopic not found'
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      subTopic
    }
  });
}));

router.delete('/:subtopicId', catchAsync(async (req, res, next) => {
  const subTopic = await SubTopic.findByIdAndDelete(req.params.subtopicId);
  if (!subTopic) {
    return res.status(404).json({
      status: 'fail',
      message: 'Subtopic not found'
    });
  }
  res.status(204).json({
    status: 'success',
    data: null
  });
}));

module.exports = router;