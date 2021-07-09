const { Schema, model, pluralize } = require('mongoose');

pluralize(null);

const userSchema = Schema({
  login: String,
  email: {
    type: String,
    unique: true,
  },
  tokens: {
    googleId: String,
  },
  img: String,
  createdAt: Date,
  updatedAt: Date,
},
{ timestamps: true });

module.exports = model('users', userSchema);
