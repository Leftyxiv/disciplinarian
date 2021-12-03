const express = require('express');
const config = require('./db.config.js');
const mongoose = require('mongoose');

const userRouter = require('./routes/userRoutes.js');
const topicRouter = require('./routes/topicRoutes.js');

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

app.use('/api/users', userRouter);
app.use('/api/topics', topicRouter);

app.listen(port, () => {
  console.log(`express server listening on port ${ port }`);
});
