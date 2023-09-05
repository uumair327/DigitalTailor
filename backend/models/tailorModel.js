const mongoose = require('mongoose');

const tailorSchema = new mongoose.Schema({
  // Define your tailor schema fields here
  // For example:
  name: String,
  email: String,
  // ... other fields
});

const Tailor = mongoose.model('Tailor', tailorSchema);

module.exports = Tailor;
.
