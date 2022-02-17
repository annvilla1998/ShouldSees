const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async(req, res, next) => {
  res.render('index', { title: 'Shouldsees' });
}));

module.exports = router;
