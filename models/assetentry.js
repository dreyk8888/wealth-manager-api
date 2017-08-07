var mongoose = require('mongoose');

var AssetEntrySchema = new mongoose.Schema({
  assetType: String,
  assetName: String,
  amount: Number,
  category: String,
  date_purchased: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AssetEntry', AssetEntrySchema);
