var mongoose = require('mongoose');

var AssetEntrySchema = new mongoose.Schema({
  class: String,
  name: String,
  units: Number,
  unitCost: Number,
  amount: Number,   //this will be calculated from units X unitCost
  location: String,
  date_purchased: { type: Date, default: Date.now },
  currency: String,

});

module.exports = mongoose.model('AssetEntry', AssetEntrySchema);
