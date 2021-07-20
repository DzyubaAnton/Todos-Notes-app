const { Schema, model, pluralize } = require('mongoose');

pluralize(null);

const noteSchema = Schema({
  text: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  isUpdating: {
    type: Boolean,
    default: false,
  },
  createdAt: Date,
  updatedAt: Date,
},
{ timestamps: true });

module.exports = model('notes', noteSchema);
