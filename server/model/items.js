const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  perishable: Boolean,
  category: String,
  quantity: Number,
  recipeUrl: String
});


module.exports = mongoose.model('Item', ItemSchema);
