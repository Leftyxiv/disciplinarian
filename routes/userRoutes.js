const express = require('express');
const User = require('../models/User.js');

const router = express.Router();

const catchAsync = require('../utils/catchAsync');

router.get('/', catchAsync(async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    status: 'success',
    results: users.length,
    users,
  });
}));


module.exports = router;