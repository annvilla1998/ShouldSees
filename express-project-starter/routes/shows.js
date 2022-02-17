const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { requireAuth } = require('../auth.js')

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
        show,
        showId
    })
}))


router.get('/:id(\\d+)/review', requireAuth, csrfProtection, asyncHandler(async(req,res)=> {

    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId)
    const review = await Review.build();
    res.render("review.pug", {
        show,
        showId,
        review,
        csrfToken: req.csrfToken()
    })
}))

const reviewValidators = [
    check('review')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for username')
]

router.post('/:id(\\d+)/review',requireAuth, reviewValidators, csrfProtection, asyncHandler(async(req,res)=> {
    const { rating, content } = req.body;

    const review = await Review.create({ rating, content, showId: req.show.id, userId: req.user.id });
    
    res.redirect('/shows/:id(\\d+)')

}))

router.patch('/:id(\\d+)/review/edit')

// router.delete('/:id(\\d+)/review/:id')


module.exports = router;
