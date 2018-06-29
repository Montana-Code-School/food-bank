const mongoose = require('mongoose');

module.exports.connect = (uri) => {
let mon = mongoose.createConnection(uri, {useMongoClient: true})
  // plug in the promise library:
  mongoose.Promise = global.Promise;


mon.once('open', () => {
    console.log("connected");
  });

  // load models
  require('./user');
  require('./items');
  require('./inventory');

};
