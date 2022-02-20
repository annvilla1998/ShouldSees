const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { Op } = require("sequelize");
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const myshowlistshow = require("../db/models/myshowlistshow");
const { requireAuth } = require("../auth.js");
const { User, MyShowList, Show, MyShowListShow } = db;

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;

    const user = await User.findByPk(userId, {
      include: {
        model: MyShowList,
      },
    });

    // const myShowLists = user.MyShowLists;

    // const showLists = await MyShowList.findAll({
    //     where: {
    //         userId: userId
    //     },
    //     include: {
    //         model: Show
    //     }
    // })

    // const shows = await MyShowListShow.findAll({
    //     include: {
    //         model: Show,
    //     },
    //     where: {
    //         showId:Show.id
    //     }
    // })

    const lists = await MyShowList.findAll({
      where: {
        userId: userId,
      },
      include: {
        model: Show,
      },
    });

    // const { currWatch, watched, wantWatch, userId } = req.body;
    // const { myShowListId } = req.body;

    const wantToWatch = lists[0].Shows;
    const wantToWatchList = lists[0];

    const currentlyWatching = lists[1].Shows;
    const currentlyWatchingList = lists[1];

    const watched = lists[2].Shows;
    const watchedList = lists[2];

    //array of join table relationship objects
    const myShowListShows = await MyShowListShow.findAll({
      where: {
        [Op.or]: [
          { myShowListId: wantToWatchList.id },
          { myShowListId: currentlyWatchingList.id },
          { myShowListId: watchedList.id },
        ],
      },
    });

    // console.log(myShowListShows);

    // const currentShowRelationship = await MyShowListShow.findOne({
    //   where: {
    //     showsId,
    //     [Op.or]: [
    //       { myShowListId: wantToWatchList.id },
    //       { myShowListId: currentlyWatchingList.id },
    //       { myShowListId: watchedList.id },
    //     ],
    //   },
    // });

    // const shows = () => {
    //     for (let i = 0; i < lists.length; i++) {
    //         console.log(lists[i].listName)
    //         for (let j = 0; j < lists[i].Shows.length; j++) {
    //             console.log(lists[i].Shows[j])
    //         }
    //         console.log("\n\n\n\n")
    //     }
    // }

    // const shows = await MyShowListShow.findAll({
    //     where
    // })

    // const shows = await Show.findAll({
    //     where: {
    //         showId:Show.id
    //     },
    //     include: {
    //         model: MyShowList
    //     }
    // })

    // const showlistshows = await MyShowListShow.findAll({
    //     where: {

    //     }
    // })

    res.render("my-show-list.pug", {
      user,
      wantToWatch,
      currentlyWatching,
      watched,
      wantToWatchList,
      currentlyWatchingList,
      watchedList,
    });
  })
);

router.post(
  "/:id(\\d+)/show/:id(\\d+)/delete",
  requireAuth,
  asyncHandler(async (req, res) => {
    console.log("LIST ID:", req.body.listId);
    console.log("SHOW ID:", req.body.showId);
    // const myShowListShowId = req.body.;
    // const myShowListShow = await MyShowListShow.findByPk(myShowListShowId);
    // await myShowListShow.destroy();
    const myShowListId = req.body.listId;
    const showId = req.body.showId;
    const myShowListShow = await MyShowListShow.findOne({
      where: {
        myShowListId,
        showsId: showId,
      },
    });

    // console.log(myShowListShow);
    await myShowListShow.destroy();

    res.redirect("/my-show-list");
  })
);

module.exports = router;
