const {mongoose} = require('./db/connection');
// const {MongoClient} = require('./db/connection');
const express = require('express');
const bodyParser = require('body-parser');

var {Customer} = require('./models/customer');
var {Servant} = require('./models/servant');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to Consulting App');
})

app.post('/customers', (req, res) => {
  var body = req.body;
  var customer = new Customer({
    invoiceName: body.invoiceName,
    reportName: body.reportName,
    "address.text" : body.address.text,
    "address.area" : body.address.area,
    "address.town" : body.address.town,
    "address.city" : body.address.city,
    "address.postalCode" : body.address.postalCode,
    "address.country" : body.address.country,
    taxOffice: body.taxOffice,
    taxNumber: body.taxNumber,
    phone: body.phone
  });

  customer.save().then((doc) => {
      res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/servants', (req, res) => {
  var body = req.body;
  var servant = new Servant({
    name: body.name,
    phone: body.phone,
    'expertise.area': body.expertise.area,
    'expertise.level': body.expertise.level
  });

  servant.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Web Server is listening on port 3000...');
})
