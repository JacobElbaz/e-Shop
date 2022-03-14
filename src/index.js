const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(port, () => {
  console.log('server is up and running');
});

