const mongoose = require('mongoose');

const LogEntrySchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
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
    ref: 'SubTopic',
    required: true,
  }
});

const LogEntry = mongoose.model('LogEntry', LogEntrySchema);
module.exports = LogEntry;