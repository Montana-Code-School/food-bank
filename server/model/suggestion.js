const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({
  body: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});


module.exports = mongoose.model('Suggestion', SuggestionSchema);
