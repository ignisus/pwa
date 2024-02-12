// gamesRoutes.js
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.collection('games')
      .find({})
      .toArray((err, result) => {
        if (err) {
          console.error('Error:', err);
          res.status(500).send('Error 500');
          return;
        }
        res.send(result);
      });
  });

  return router;
};