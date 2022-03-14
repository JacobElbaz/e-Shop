const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
  console.log('server is up and running');
});

