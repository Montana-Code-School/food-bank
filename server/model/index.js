const mongoose = require('mongoose');

let uri = "mongodb://heroku_3fj2xqnm:ijlbgmcjvp1hjnbi62f8ji5hcj@ds223161.mlab.com:23161/heroku_3fj2xqnm";

module.exports.connect = (uri) => {
  
mongoose.connect(uri);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log("connected");
});

  // load models
  require('./user');
  require('./items');
  require('./inventory');
}
