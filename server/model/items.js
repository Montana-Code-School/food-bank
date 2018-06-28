const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  perishable: Boolean,
  category: String,
  quantity: String,
  recipeUrl: String
});


module.exports = mongoose.model('Item', ItemSchema);
