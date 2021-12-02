const mongoos = require('mongoose');

const topicschema = mongoos.Schema({
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

const Topic = mongoos.model('Topic', topicschema);
module.exports = Topic;