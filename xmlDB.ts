// Example xml like eXistDB connection (Testing)

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const existDBUrl = 'http://localhost:8080/exist/rest/ignisus';

app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get(`${existDBUrl}/assets/existDB/posts.xml`);
    // Go to JSON :D
    res.json(transformaXMLaJSON(response.data));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error 500');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
