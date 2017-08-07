var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var AssetEntry = require('../models/assetentry.js');

/* GET /assetentry listing. */
router.get('/', function(req, res, next) {
  AssetEntry.find(function (err, assets) {
    if (err) return next(err);
    res.json(assets);
  });
});
module.exports = router;

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  AssetEntry.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /assetentry */
router.post('/', function(req, res, next) {
  AssetEntry.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /assetentry/:id */
//findByIdAndUpdate is a mongoose function
router.put('/:id', function(req, res, next) {
  AssetEntry.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /assetentry/:id */
//findByIdAndRemove is a mongoose function
router.delete('/:id', function(req, res, next) {
  AssetEntry.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});