var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  invoiceName: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  reportName: {
    type: String,
    // required: true,
    minlength: 1,
    trim: true
  },
  address: {
    text: String,
    area: String,
    town: String,
    city: String,
    postalCode: Number,
    country: String
  },
  taxOffice: String,
  taxNumber: String,
  phone: String,
  passive: {
    type: Boolean,
    default: false
  }
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = {Customer};
