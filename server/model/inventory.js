const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
   id:  Number,

});


module.exports = mongoose.model('Inventory', InventorySchema);
