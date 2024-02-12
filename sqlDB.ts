//Example SQL DB (Testing Server)

const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'admin',
  password: 'password',
  database: 'ignisus',
});

app.use((req, res, next) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Error 500');
      return;
    }

    req.db = connection;
    next();
  });
});

app.get('/posts', (req, res) => {
  req.db.query('SELECT * FROM posts', (err, results) => {
    req.db.release();

    if (err) {
      console.error('Error:', err);
      res.status(500).send('Error 500');
      return;
    }

    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
});
