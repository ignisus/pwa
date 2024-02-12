// Backend MongoDB (Default Server)

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const usersRoutes = require('./usersRoutes');
const postsRoutes = require('./postsRoutes');
const minecraftRoutes = require('./minecraftRoutes');
const hostingRoutes = require('./hostingRoutes');
const gamesRoutes = require('./gamesRoutes');

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'ignisus';

MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  const db = client.db(dbName);

  app.use('/users', usersRoutes(db));
  app.use('/posts', postsRoutes(db));
  app.use('/minecraft', minecraftRoutes(db));
  app.use('/hosting', hostingRoutes(db));
  app.use('/games', gamesRoutes(db));

  app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
  });
});
