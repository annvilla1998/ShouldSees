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

/*
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

router.post('/:id(\\d+)/review', reviewValidators, csrfProtection, asyncHandler(async(req,res)=> {
    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId)


    const { content, rating } = req.body;

    const review = await Review.create({ userId: res.locals.user.id, content, showId, rating });
    console.log(req.body)
    // const validatorErrors = validationResult(req);

    // if (validatorErrors.isEmpty()) {
    //   await review.save();
      res.redirect(`/shows/${showId}`);
    // } else {
    //   const errors = validatorErrors.array().map((error) => error.msg);
    //   res.render('review.pug', {
    //     show,
    //     review,
    //     errors,
    //     csrfToken: req.csrfToken()
    //   });
    // }
}))

router.patch('/:id(\\d+)/review/edit')

// router.delete('/:id(\\d+)/review/:id')
*/

const reviewValidators = [
    check('review')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for username')
]

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

router.post('/:id(\\d+)/review', requireAuth, csrfProtection, asyncHandler(async(req,res)=> {
    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId)


    const { content, rating } = req.body;

    const review = await db.Review.build({ content:req.body.review, showsId:showId, rating, userId: res.locals.user.id, });

    await review.save();
    res.redirect(`/shows/${review.showsId}`);
}))

module.exports = router;
