const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Consulting App');
});

app.listen('3000', () => {
  console.log('Consulting App listening on port 3000');
});
