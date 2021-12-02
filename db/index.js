const mongoose = require('mongoose');
const config = require('../db.config.js');

const db = config.DATABASE.replace(
  '-PASSWORD-',
  config.DATABASE_PASSWORDA
);

mongoose.connect(db).then(() => {
  console.log('db connected');
});