const mongoose = require('mongoose');

//creates the item schema which includes the name, category, and quantity of the item
const ItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  quantity: String,
});


module.exports = mongoose.model('Item', ItemSchema);
