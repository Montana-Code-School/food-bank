const mongoose = require('mongoose');

//Defines the suggestions scheme - includes the body of the feedback and when it was created
const SuggestionSchema = new mongoose.Schema({
  body: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});


module.exports = mongoose.model('Suggestion', SuggestionSchema);
