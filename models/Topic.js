const mongoose = require('mongoose');

const topicschema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  parent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Topic = mongoose.model('Topic', topicschema);
module.exports = Topic;