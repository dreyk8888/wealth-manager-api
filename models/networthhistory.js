var mongoose = require('mongoose');

var NetWorthHistorySchema = new mongoose.Schema({
  userId: {type: String, default: ""},
  net_worth: {type: Number, default: 0},
  date: { type: Date, default: Date.now },
  currency: {type: String, default: "USD"}  //refer to /WealthManager/app/scripts/GlobalConstants.js for constant strings to use for currency
});

module.exports = mongoose.model('NetWorthHistory', NetWorthHistorySchema);
