const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { requireAuth } = require("../auth.js");

const { Show, MyShowList, Review, User, MyShowListShow } = db;

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

    //if not logged in
    if (req.session.auth === undefined) {
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
      });

      return;
    }

    //if logged in
    if (req.session.auth.userId) {
      const userId = req.session.auth.userId;
      const user = await db.User.findByPk(userId);

      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      //await MyShows dropdown menu thing
      const lists = await MyShowList.findAll({
        where: {
          userId,
        },
      });

      // console.log(lists);
      // console.log("=================================", lists[2].id);

      const wantToWatchId = lists[0].id;
      const currentlyWatchingId = lists[1].id;
      const watchedId = lists[2].id;
      const currentList1 = await MyShowListShow.findOne({
        where: {
          myShowListId: wantToWatchId,
          showsId: showId,
        },
        include: {
          model: MyShowList,
        },
      });
      const currentList2 = await MyShowListShow.findOne({
        where: {
          myShowListId: currentlyWatchingId,
          showsId: showId,
        },
        include: {
          model: MyShowList,
        },
      });
      const currentList3 = await MyShowListShow.findOne({
        where: {
          myShowListId: watchedId,
          showsId: showId,
        },
        include: {
          model: MyShowList,
        },
      });
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
        lists,
        wantToWatchId,
        currentlyWatchingId,
        watchedId,
        currentList1,
        currentList2,
        currentList3,
      });
    }
  })
);

//if there is relationship in join table (show is in list)
router.post(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId);

    const userId = req.session.auth.userId;
    const user = await db.User.findByPk(userId);

    const lists = await MyShowList.findAll({
      where: {
        userId: userId,
      },
      include: {
        model: Show,
      },
    });

    // console.log(lists);
    // console.log("=================================", lists[2].id);

    const wantToWatchId = lists[0].id;
    const currentlyWatchingId = lists[1].id;
    const watchedId = lists[2].id;
    const { updatedShowListId } = req.body;
    // console.log(
    //   "$$$$$$$$$$$$$$$$$$$$$$$Updated Show List Id:",
    //   updatedShowListId
    // );
    // search join table to see where this connection exists, if it
    // does delete and create association, if not just create

    //where showId = showId listId=listId
    const joinWantToWatch = await MyShowListShow.findOne({
      where: {
        myShowListId: wantToWatchId,
        showsId: showId,
      },
    });
    const joinCurrentlyWatching = await MyShowListShow.findOne({
      where: {
        myShowListId: currentlyWatchingId,
        showsId: showId,
      },
    });
    const joinWatched = await MyShowListShow.findOne({
      where: {
        myShowListId: watchedId,
        showsId: showId,
      },
    });

    // console.log("&&&&&&&&&&&&&&&&&&&showlistId:", joinTable[0].myShowListId);
    // console.log("&&&&&&&&&&&&&&&&&&&WANT TO WATCH", joinWantToWatch);
    // console.log("&&&&&&&&&&&&&&&&&&&CURRENTLY", joinCurrentlyWatching);
    // console.log("&&&&&&&&&&&&&&&&&&&WATCHED", joinWatched);
    // this shows that this show has a relationship withs ome table
    // have to find if the myShowListId matches the one of user

    if (joinWantToWatch) {
      joinWantToWatch.destroy();
    }

    if (joinCurrentlyWatching) {
      joinCurrentlyWatching.destroy();
    }

    if (joinWatched) {
      joinWatched.destroy();
    }

    const newListConnection = await db.MyShowListShow.build({
      myShowListId: updatedShowListId,
      showsId: showId,
    });

    await newListConnection.save();

    const finalListConnection = await db.MyShowListShow.findOne({
      where: {
        myShowListId: updatedShowListId,
        showsId: showId,
      },
      include: {
        model: MyShowList,
      },
    });

    // console.log("&&&&&&&&&&&&&&&&&&&WANT TO WATCH", newListConnection);

    res.json({ message: "Success", newListEntry: finalListConnection });

    // //joinWantToWatch
    // if (!joinWantToWatch.length) {
    //   const newJoinWantToWatch = await db.MyShowListShow.build({
    //     myShowListId: updatedShowListId,
    //     showsId: showId,
    //   });
    //   await newJoinWantToWatch.save();

    //   console.log("&&&&&&&&&&&&&&&&&&&WANT TO WATCH", newJoinWantToWatch);

    //   res.json({ message: "Success", newListEntry: newJoinWantToWatch });
    // }

    // if (joinWantToWatch.length) {
    //   joinWantToWatch.destroy({
    //     where: {
    //       myShowListId: wantToWatchId,
    //       showsId: showId,
    //     },
    //   });

    //   const newJoinWantToWatch = await db.MyShowListShow.build({
    //     myShowListId: updatedShowListId,
    //     showsId: showId,
    //   });
    //   await newJoinWantToWatch.save();

    //   console.log("&&&&&&&&&&&&&&&&&&&WANT TO WATCH", newJoinWantToWatch);

    //   res.json({ message: "Success", newListEntry: newJoinWantToWatch });
    // }
    // //joinCurrentlyWatching
    // if (!joinCurrentlyWatching.length) {
    //   const newJoinCurrentlyWatching = await db.MyShowListShow.build({
    //     myShowListId: updatedShowListId,
    //     showsId: showId,
    //   });
    //   await newJoinCurrentlyWatching.save();

    //   console.log("&&&&&&&&&&&&&&&&&&&CURRENTLY", newJoinCurrentlyWatching);
    //   res.json({ message: "Success", newListEntry: newJoinCurrentlyWatching });
    // }

    // if (joinCurrentlyWatching.length) {
    //   joinCurrentlyWatching.destroy({
    //     where: {
    //       myShowListId: currentlyWatchingId,
    //       showsId: showId,
    //     },
    //   });

    //   const newJoinCurrentlyWatching = await db.MyShowListShow.build({
    //     myShowListId: updatedShowListId,
    //     showsId: showId,
    //   });
    //   await newJoinCurrentlyWatching.save();
    //   console.log("&&&&&&&&&&&&&&&&&&&CURRENTLY", newJoinCurrentlyWatching);
    //   res.json({ message: "Success", newListEntry: newJoinCurrentlyWatching });
    // }
    // //joinWatched
    // if (!joinWatched.length) {
    //   const newJoinWatched = await db.MyShowListShow.build({
    //     myShowListId: updatedShowListId,
    //     showsId: showId,
    //   });
    //   await newJoinWatched.save();
    //   console.log("&&&&&&&&&&&&&&&&&&&WATCHED", newJoinWatched);
    //   res.json({ message: "Success", newListEntry: newJoinWatched });
    // }

    // if (joinWatched.length) {
    //   joinWatched.destroy({
    //     where: {
    //       myShowListId: watchedId,
    //       showsId: showId,
    //     },
    //   });

    //   const newJoinWatched = await db.MyShowListShow.build({
    //     myShowListId: updatedShowListId,
    //     showsId: showId,
    //   });
    //   await newJoinWatched.save();
    //   console.log("&&&&&&&&&&&&&&&&&&&WATCHED", newJoinWatched);
    //   res.json({ message: "Success", newListEntry: newJoinWatched });
    // }
  })
);

/*
//if there's no relationship (showId not in join table) (show not in lists)
router.post(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const showId = parseInt(req.params.id, 10);
    const show = await db.Show.findByPk(showId);

    const userId = req.session.auth.userId;
    const user = await db.User.findByPk(userId);

    const lists = await MyShowList.findAll({
      where: {
        userId: userId,
      },
      include: {
        model: Show,
      },
    });

    const lists = await MyShowList.findAll({
      where: {
        userId: userId,
      },
    });

    // console.log(lists);
    console.log("=================================", lists[2].id);

    const wantToWatchId = lists[0].id;
    const currentlyWatchingId = lists[1].id;
    const watchedId = lists[2].id;

    //search join table to see where this connection exists, if it does delete and create association, if not just create

    //where showId = showId listId=listId
    const joinTable = await MyShowListShow.findAll({
      where: {
        showsId: showId,
      },
    });

    const { myShowListId, showsId } = req.body;

    const myShowListShow = await db.Review.build({
      myShowListId: myShowListId,
      showsId: showsId,
    });

    await review.save();

    // console.log("******************************************", joinTable);

    res.json({ message: "Success" });

    //*************************************************
    const wantToWatch = lists[0].Shows;

    const currentlyWatching = lists[1].Shows;

    const watched = lists[2].Shows;
    const search = (lists, showId) => {
      for (let i = 0; i < lists.length; i++) {
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
*/

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

router.get(
  "/review/:id(\\d+)/edit",
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const { userId } = req.session.auth;
    const review = await db.Review.findByPk(reviewId, {
      include: {
        model: User,
      },
    });
    const show = await db.Show.findOne({
      where: {
        id: review.showsId,
      },
    });

    if (userId !== review.userId) {
      const err = new Error("Unauthorized");
      err.status = 401;
      err.message = "You are not authorized to edit this review.";
      err.title = "Unauthorized";
      throw err;
    }
    res.render("edit-review.pug", {
      review,
      reviewId,
      show,
      csrfToken: req.csrfToken(),
    });
  })
);

// router.put('/review/:id(\\d+)/edit', requireAuth,asyncHandler(async (req,res) =>{
//     const { userId } = req.session.auth

//     const { rating, content } = req.body;

//     let review = await db.Review.findByPk(req.params.id)

//     review.content = req.body.review;
//     review.rating = rating

//     if (userId !== review.userId) {
//         const err = new Error("Unauthorized");
//         err.status = 401;
//         err.message = "You are not authorized to edit this review.";
//         err.title = "Unauthorized";
//         throw err;
//       }
//     await review.save();
//     res.json({data: review})
//     res.redirect(`/shows/${review.showsId}`);
// }))

const reviewNotFoundError = (id) => {
  const err = Error("Review not found");
  err.errors = [`Review with id of ${id} could not be found.`];
  err.title = "Review not found.";
  err.status = 404;
  return err;
};

router.post(
  "/review/:id(\\d+)/edit",
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await Review.findByPk(reviewId);

    // const showId = parseInt(req.params.id, 10);

    review.content = req.body.review;
    review.rating = req.body.rating;
    await review.save();

    // console.log("HELOOOOOOOOOOOOOOOOO");
    // if (review) {
    //   await review.update({
    //     content: req.body.content,
    //     showsId: showId,
    //     rating: req.body.rating,
    //     userId: res.locals.user.id,
    //   });
    //   // res.json({ review });
    // } else {
    //   next(reviewNotFoundError(reviewId));
    // }
    res.redirect(`/shows/${review.showsId}`);
  })
);

// router.post(
//   "/review/:id(\\d+)/edit",
//   csrfProtection,
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     const reviewId = parseInt(req.params.id, 10);

//     let reviewToUpdate = await db.Review.findOne({
//       where: {
//         reviewId,
//       },
//     });
//     console.log("$%$$%$%$%$%$%$%$%$", reviewToUpdate);

//     //let reviewToUpdate = await db.Show.findByPk(reviewId);

//     const { userId } = req.session.auth;

//     const { rating } = req.body;

//     const { showsId } = reviewToUpdate.showsId;

//     if (userId !== reviewToUpdate.userId) {
//       const err = new Error("Unauthorized");
//       err.status = 401;
//       err.message = "You are not authorized to edit this review.";
//       err.title = "Unauthorized";
//       throw err;
//     }

//     await reviewToUpdate.destroy();

//     const updatedReview = await db.Review.build({
//       content: req.body.review,
//       userId,
//       showsId,
//       rating,
//     });

//     await updatedReview.save();
//     // res.json({ message: "Success" });
//     res.redirect(`/shows/${updatedReview.showsId}`);
//   })
// );

router.delete(
  "/review/:id(\\d+)/delete",
  asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const review = await Review.findByPk(reviewId);

    // console.log(req.session.auth.userId);
    // console.log("ROUTER DELETE!!!!!!!!!!!");

    if (req.session.auth.userId === review.userId) {
      await review.destroy();
      // res.json({ message: `Deleted review with id of ${req.params.id}.` });
      res.json({ message: "Success" });
    }

    if (req.session.auth.userId !== review.userId) {
      const err = new Error("Unauthorized");
      err.status = 401;
      err.message = "You are not authorized to delete this review.";
      err.title = "Unauthorized";
      throw err;
    }

    if (!review) {
      next(reviewNotFoundError(req.params.id));
    }
  })
);

module.exports = router;
