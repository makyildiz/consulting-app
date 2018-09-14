//****** mongoose connection
// const mongoose = require('mongoose');
// var url = 'mongodb://localhost:27017/consultingApp';
//
// mongoose.connect(url, {useNewUrlParser: true});
//
// var db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('mongoose connected to server');
// });
//
// module.exports = {mongoose};
//

//*******Native mongodb
const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect on Mongo Server');
  }
  console.log(`Connected to Mongo Server...`);
  var db = client.db('consultingApp');
});

module.exports = {MongoClient};
