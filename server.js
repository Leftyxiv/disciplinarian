const express = require('express');
const config = require('./db.config.js');
const mongoose = require('mongoose');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');

const userRouter = require('./routes/userRoutes.js');
const topicRouter = require('./routes/topicRoutes.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));

// security middlewares
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());

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
