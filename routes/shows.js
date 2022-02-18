const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { requireAuth } = require("../auth.js");

const { Show, MyShowList, Review, User } = db;

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const shows = await db.Show.findAll();
    res.render("shows.pug", {
      shows,
    });
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId);

    const userId = parseInt(req.params.id, 10);
    const user = await db.User.findByPk(userId);

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    //await MyShows dropdown menu thing
    const lists = await MyShowList.findAll({
      where: {
        userId: 1,
      },
      include: {
        model: Show,
      },
    });

    const wantToWatch = lists[0].Shows;

    const currentlyWatching = lists[1].Shows;

    const watched = lists[2].Shows;

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    const reviews = await Review.findAll({
      where: {
        showsId: showId,
      },
      include: {
        model: User,
      },
    });

    res.render("show-details.pug", {
      show,
      showId,
      reviews,
      user,
      wantToWatch,
      currentlyWatching,
      watched,
    });
  })
);

router.post(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId);

    const userId = parseInt(req.params.id, 10);
    const user = await db.User.findByPk(userId);

    const lists = await MyShowList.findAll({
      where: {
        userId: 1,
      },
      include: {
        model: Show,
      },
    });

    const wantToWatch = lists[0].Shows;

    const currentlyWatching = lists[1].Shows;

    const watched = lists[2].Shows;

    const search = (lists, showId) => {
      for (let i = 0; i < list.length; i++) {
        if (lists[i].id === showId) {
          return i;
        }
      }

      return false;
    };

    if (search(lists, showId) === false) {
      // if search returns -1, add to list
      // lists returns MyShowList array of 3 lists, lists.id return the MyShowList id
      // lists[0].Shows returns array of each show in one list
      // PUSH
      //how to get the option value that they choose? that will be the list index that we're using
    }

    if (search(lists, showId) > -1) {
      //if search returns 0, 1, or 2
      let listNumber = search(lists, showId);
      //remove from this list that it's already in SPLICE
      lists[listNumber];

      //change to the list that the user wants it to be in
      //lists[whatever number value of dropdown user chooses]++ PUSH
    }

    //if they press select, don't do anything
  })
);

router.get(
  "/:id(\\d+)/review",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId);
    const reviews = await Review.build();
    res.render("review.pug", {
      show,
      showId,
      reviews,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post(
  "/:id(\\d+)/review",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId);

    const { content, rating } = req.body;

    const review = await db.Review.build({
      content: req.body.review,
      showsId: showId,
      rating,
      userId: res.locals.user.id,
    });

    await review.save();
    res.redirect(`/shows/${review.showsId}`);
  })
);

module.exports = router;
