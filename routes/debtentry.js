var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var DebtEntry = require('../models/debtentry.js');

module.exports = router;


/* GET /debtentry listing. */

router.get('/', function(req, res, next) {
  DebtEntry.find(function (err, debts) {
    if (err) return next(err);
    res.json(debts);
  });
});

/* GET /debtentry/id */
router.get('/:id', function(req, res, next) {
  DebtEntry.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*GET by user Id */
router.get('/', function(req, res, next) {
  DebtEntry.find({user: req.query.userId}, function (err, debts) {
    if (err) return next(err);
    res.json(debts);
  });
});

/* POST /debtentry */
router.post('/', function(req, res, next) {
  DebtEntry.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /debtentry/:id */
//findByIdAndUpdate is a mongoose function
router.put('/:id', function(req, res, next) {
  DebtEntry.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /debtentry/:id */
//findByIdAndRemove is a mongoose function
router.delete('/:id', function(req, res, next) {
  DebtEntry.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});