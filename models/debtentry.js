var mongoose = require('mongoose');

var DebtEntrySchema = new mongoose.Schema({
  term: String,
  name: String,
  amount: Number   //this will be calculated from units X unitCost
});

module.exports = mongoose.model('DebtEntry', DebtEntrySchema);
