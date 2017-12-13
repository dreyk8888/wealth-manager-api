var mongoose = require('mongoose');

var AssetEntrySchema = new mongoose.Schema({
  class: {type: String, default: ""},
  name: {type: String, default: ""},
  units: {type: Number, default: 0},
  unitCost: {type: Number, default: 0},
  marketPrice: {type: Number, default: 0},
  totalCost: {type: Number, default: 0},   //this will be calculated from units X unitCost
  marketValue: {type: Number, default: 0},
  location: {type: String, default: "Domestic"},  //see /WealthManager/app/scripts/GlobalConstants.js for constant strings
  date_purchased: { type: Date, default: Date.now },
  currency: {type: String, default: "USD"} //see WealthManager/app/scripts/GlobalConstants.js for constant strings

});

module.exports = mongoose.model('AssetEntry', AssetEntrySchema);
