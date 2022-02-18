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
    const show = await db.Show.findByPk(showId);

    const userId = parseInt(req.params.id, 10);
    const user = await db.User.findByPk(userId);

    const reviews = await Review.findAll({
        where: {
            showsId: showId
        },
        include: {
            model: User
        }
    });

    res.render('show-details.pug', {
        show,
        showId,
        reviews,
        user
    });
}))


router.get('/:id(\\d+)/review', requireAuth, csrfProtection, asyncHandler(async(req,res)=> {

    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId)
    const reviews = await Review.build();
    res.render("review.pug", {
        show,
        showId,
        reviews,
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
