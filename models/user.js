var mongoose = require('mongoose');
var uuid = require ('node-uuid');

var UserSchema = new mongoose.Schema({
  userId: {type: String, default: uuid.v4},
  userPassword: {type: String, default: ""}
});

module.exports = mongoose.model('User', UserSchema);
