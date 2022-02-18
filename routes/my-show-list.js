const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const myshowlistshow = require('../db/models/myshowlistshow');
const { requireAuth } = require('../auth.js')
const { User, MyShowList, Show, MyShowListShow } = db;

router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;

    const user = await User.findByPk(userId, {
        include: {
            model: MyShowList
        }
    })

    // const myShowLists = user.MyShowLists;

    // const showLists = await MyShowList.findAll({
    //     where: {
    //         userId: 1
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
            userId:1
        },
        include: {
            model: Show
        }
    })

    const wantToWatch = lists[0].Shows;

    const currentlyWatching = lists[1].Shows;

    const watched = lists[2].Shows;

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

    console.log("&&&&&&&&&&&&&&&&&&", lists[0].Shows)

    res.render('my-show-list.pug', {
        user,
        wantToWatch,
        currentlyWatching,
        watched
    })

}))

module.exports = router;
