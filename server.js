const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const port = 3000;

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

  const status = $('p')
    .filter(() => {
      return $(this).text().trim() === 'Current Capacity';
    })
    .next()
    .text();

  console.log('status', status);

  res.send($.html());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
