const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

var Project = mongoose.model('Project', projectSchema);

module.exports = {Project};
