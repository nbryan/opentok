var mongoose = require('mongoose');

var schema = mongoose.schema({
  _id: String
  tokens: [String]
});

module.exports = mongoose.model('Session', schema);
