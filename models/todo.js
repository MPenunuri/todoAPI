const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  todo: { type: String, required: true, maxLength: 300 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', TodoSchema);
