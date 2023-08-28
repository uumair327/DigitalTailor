const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your user schema fields here
  // For example:
  name: String,
  email: String,
  // ... other fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
