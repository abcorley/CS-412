var express = require('express');
var router = express.Router();
const redis = require('redis');
const client = redis.createClient();
const {APIEndpoint, APIKey} = require("../config");

(async () => {
    await client.connect();
})();

client.on('ready', () => {
    console.log("Connected!");
});

client.on('error', (err) => {
    console.error(err);
});

router.post('/', async (req, res,next) => {
  const query = req.body.search;
  console.log(`${query}`);
  if (await client.exists(query)){
      let searchResults = await client.get(query);
      let response = {
          searchResults: JSON.parse(searchResults),
          cache: true
      };
      res.send(response);
  } else {
      let returnValueRaw = await fetch( APIEndpoint + APIKey +
          '&language=en-US&query=' + query + '&page=1&include_adult=false');
      let searchResults = await returnValueRaw.json();
      await client.set(query, JSON.stringify(searchResults));
      let response = {
          searchResults: searchResults,
          cache: false
      }
      await client.expire(query, 60);
      res.send(response)
  }
});

module.exports = router;
