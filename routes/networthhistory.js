var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var NetWorthHistory = require('../models/networthhistory.js');

/* GET /networthhistory listing. */
router.get('/', function(req, res, next) {
  NetWorthHistory.find(function (err, netWorth) {
    if (err) return next(err);
    res.json(netWorth);
  });
});
module.exports = router;

/* GET /NetWorthHistory/id */
router.get('/:id', function(req, res, next) {
  NetWorthHistory.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /NetWorthHistory */
router.post('/', function(req, res, next) {
  NetWorthHistory.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /NetWorthHistory/:id */
//findByIdAndUpdate is a mongoose function
router.put('/:id', function(req, res, next) {
  NetWorthHistory.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /NetWorthHistory/:id */
//findByIdAndRemove is a mongoose function
router.delete('/:id', function(req, res, next) {
  NetWorthHistory.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});