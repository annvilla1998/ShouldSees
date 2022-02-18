const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async(req, res, next) => {
  const shows = await db.Show.findAll({
    order: [
      ['criticRating', 'DESC']
    ]
  });

  res.render('index', { 
    title: 'Shouldsees',
    shows
   });
}));

module.exports = router;
