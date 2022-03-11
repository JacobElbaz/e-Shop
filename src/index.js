const express = require('express');
const port = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hey from server main page<h1>');
});

app.listen(port, () => {
  console.log('server is up and running');
});
