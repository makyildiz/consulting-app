// const {mongoose} = require('./db/connection');
const {MongoClient} = require('./db/connection');
const express = require('express');
const bodyParser = require('body-parser');

var {Customer} = require('./models/customer');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to Consulting App');
})

app.post('/customers', (req, res) => {
  var customer = new Customer({
    invoiceName: req.body.invoiceName,
    reportName: req.body.reportName,
    "address.text" : req.body.address.text
  });
  res.send(customer);

  
});


app.listen(3000, () => {
  console.log('Web Server is listening on port 3000...');
})
