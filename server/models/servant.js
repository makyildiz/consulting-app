const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var servantSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  phone: {
    type: String,
    trim: true
  },
  expertise: {
    area: String,
    level: Number
  }
});

var Servant = mongoose.model('Servant', servantSchema);

module.exports = {Servant};
