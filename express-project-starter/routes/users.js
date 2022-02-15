const express = require('express');
const router = express.Router();
const db = require('../db/models');






/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/register', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
