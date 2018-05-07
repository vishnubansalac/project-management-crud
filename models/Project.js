var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Project = new Schema({
  name: {
    type: String
  },
  desc: {
    type: Number
  },
  startdate: {
    type: String
  },
  enddate: {
    type: String
  }
},{
    collection: 'projects'
});

module.exports = mongoose.model('Project', Project);