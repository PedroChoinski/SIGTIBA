var express = require('express');
var router = express.Router();
var db = require("../public/javascripts/db")
var path = require('path');

const User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
