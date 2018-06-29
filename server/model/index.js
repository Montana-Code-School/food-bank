const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri).then(() => {
  console.log("Connected to Database");
  }).catch((err) => {
      console.log("Not Connected to Database ERROR! ", err);
  });


  // load models
  require('./user');
  require('./items');
  require('./inventory');

};
