const express = require('express');
const config = require('./db.config.js');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const port = 3000;


const db = config.DATABASE.replace(
  '-PASSWORD-',
  config.DATABASE_PASSWORD
);

mongoose.connect(db).then(() => {
  console.log('db connected');
});

app.listen(port, () => {
  console.log(`express server listening on port ${ port }`);
});
