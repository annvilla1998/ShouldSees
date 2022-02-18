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


router.get('/review/:id(\\d+)/edit', csrfProtection, requireAuth,asyncHandler(async (req,res) =>{
    const reviewId = parseInt(req.params.id, 10);
    const { userId } = req.session.auth
    const review = await db.Review.findByPk(reviewId,{
        include: {
            model: User
        }
    })
    const show = await db.Show.findOne({
        where:{
            id: review.showsId
        }
    })

    if (userId !== review.userId) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.message = "You are not authorized to edit this review.";
        err.title = "Unauthorized";
        throw err;
      }
    res.render('edit-review.pug',{
        review,
        reviewId,
        show,
        csrfToken: req.csrfToken()
    })
}))


router.put('/review/:id(\\d+)/edit', csrfProtection, requireAuth,asyncHandler(async (req,res) =>{
    const reviewId = parseInt(req.params.id, 10);
    let reviewToUpdate = await db.Show.findByPk(reviewId)
    const { userId } = req.session.auth

    const { rating } = req.body;

    reviewToUpdate = { content:req.body.review, rating};

    if (userId !== reviewToUpdate.userId) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.message = "You are not authorized to edit this review.";
        err.title = "Unauthorized";
        throw err;
      }
    await reviewToUpdate.save();
    res.redirect(`/shows/${reviewToUpdate.showsId}`);
}))


module.exports = router;
