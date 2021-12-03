const express = require('express');
const User = require('../models/User.js');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({});
});

module.exports = router;