const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const port = 3000;
const GYM_LOCATIONS = require('./config/config');

// make env variables available
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const isGymStatus = (number, el) => {
  // find the el that has the status
};

app.get('/gym-status', async (req, res) => {
  async function fetchHTML(url) {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  }
  const $ = await fetchHTML('https://ffc.com/club-locations/lincoln-park/');

  const parent = $('.avia_textblock', '.av_textblock_section').text();
  const status = parent
    .split('\n')
    .filter((content) => content.length < 3 && content.includes('%'))[0];
  console.log(status);
  console.log('test config', process.env);

  res.send($.html());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
