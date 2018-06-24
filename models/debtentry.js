var mongoose = require('mongoose');

var DebtEntrySchema = new mongoose.Schema({
  userId: {type: String, default: ""},
  term: {type: String, default: ""},
  name: {type: String, default: ""},
  amount: {type: Number, default: 0}   //this will be calculated from units X unitCost
});

module.exports = mongoose.model('DebtEntry', DebtEntrySchema);
