const { Schema, model, pluralize } = require('mongoose');

pluralize(null);

const todoSchema = Schema({
  text: String,
  isDone: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  createdAt: Date,
  updatedAt: Date,
},
{ timestamps: true });

module.exports = model('todos', todoSchema);
