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

module.exports = router;