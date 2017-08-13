var mongoose = require('mongoose');

var AssetEntrySchema = new mongoose.Schema({
  assetType: String,
  assetName: String,
  units: Number,
  unitCost: Number,
  amount: Number,   //this will be calculated from units X unitCost
  category: String,
  date_purchased: { type: Date, default: Date.now },
  currency: String,

});

module.exports = mongoose.model('AssetEntry', AssetEntrySchema);
