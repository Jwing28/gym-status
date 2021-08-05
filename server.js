const express = require('express');
const fetch = require('node-fetch');
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
  const response = await fetch(
    'https://ffc.com/club-locations/lincoln-park/'
  ).then((response) => {
    const $ = cheerio.load(response.body);

    $('av_textblock_section ')
      .filter(isGymStatus)
      .each((number, el) => {
        console.log({ number, el });
      });
    // this response is html...
    console.log(JSON.stringify(response));
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
