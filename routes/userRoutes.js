const express = require('express');
const bcrypt = require('bcrypt');
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

router.post('/signup', catchAsync(async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 12);
  req.body.password = password;
  const newUser = await User.create(req.body);
  if (!newUser) {
    return res.status(400).json({
      status: 'fail',
      message: 'User not created',
    });
  }
  return res.status(201).json({
    status: 'success',
    user: newUser,
  });
}));

module.exports = router;