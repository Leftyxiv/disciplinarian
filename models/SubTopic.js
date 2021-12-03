const mongoose = require('mongoose');

const subTopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  unitOfMeasure: {
    type: String,
    required: true,
  },
  unitOfMeasureTwo: {
    type: String,
  },
  parent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    required: true,
  }
});

const SubTopic = mongoose.model('SubTopic', subTopicSchema);
module.exports = SubTopic;