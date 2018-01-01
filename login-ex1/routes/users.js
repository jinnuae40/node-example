var express = require('express');
var User = require('../models').User;

var router = express.Router();

router.get('/', function(req, res, next) {
  try {
    const users = User.findAll()
    res.json(users)
  } catch(e) {
    console.error(e)
    next(e)
  }
});

router.post('/', function(req, res, next) {
  User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  })
  .then((result) => {
    console.log(result);
    res.status(201).json(result);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  });
});

module.exports = router;