const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./database.js');
const cors = require('cors')


const start = async () => {
  const app = express();
  const port = 10000;
  const db = await mongo.connect();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.get('/api/history', async (request, response) => {

    let results = await mongo.getHistory(db.db);
    return response.send(results);

  });

  app.listen(port, () => console.log(`Book Manager History Service listening on port ${port}`));
}
start();

