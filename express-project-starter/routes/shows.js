const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const { Show, Review, User } = db;

router.get('/', asyncHandler(async(req,res) => {
    const shows = await db.Show.findAll();
    res.render('shows.pug',{
        shows
    })
}))


router.get('/:id(\\d+)', asyncHandler(async(req,res) => {
    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId)
    res.render('show-details.pug', {
        showId,
        show
    })
}))

router.get('/:id(\\d+)/review')

router.post('/:id(\\d+)/review')

// router.delete('/:id(\\d+)/review/:id(\\d+)')

module.exports = router;
