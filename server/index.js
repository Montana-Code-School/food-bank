const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const db = process.env.MONGODB_URI || config.dbUri;
console.log(db);
require('./model').connect(db);

const PORT = process.env.PORT || 5000;
console.log(PORT);
// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();


  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  app.use(bodyParser.urlencoded({ extended:false }));
  app.use(bodyParser.json());


  app.use(passport.initialize());

  const localSignupStrategy = require('./passport/local-signup');
  const localLoginStrategy = require('./passport/local-login');
  passport.use('local-signup', localSignupStrategy);
  passport.use('local-login', localLoginStrategy);

  const authCheckMiddleware = require('./middleware/auth-check');
  app.use('/api', authCheckMiddleware);

  // const adminCheckMiddleware = require('./middleware/admin-check');
  // app.use('/admin', adminCheckMiddleware);

  const authRoutes = require('./routes/auth');
  const apiRoutes = require('./routes/api');
  const adminRoutes = require('./routes/admin');
  app.use('/auth', authRoutes);
  app.use('/api', apiRoutes);
  app.use('/admin', adminRoutes);

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
