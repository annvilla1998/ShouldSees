const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const myshowlistshow = require('../db/models/myshowlistshow');
const { requireAuth } = require('../auth.js')
const { User, MyShowList, Show, MyShowListShow } = db;
const { Op } = require("sequelize");

router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    //use UserId in final findByPk. Just using 1 for testing.

    const user = await User.findByPk(1, {
        include: {
            model: MyShowList,
            include: Show
        }
    })

    const want = await User.findByPk(1, {
        include: {
            model: MyShowList,
            include: Show,
        },
            where: {
                listName: "Want to Watch"
            },
    })

    // console.log('showList', user.MyShowLists)
    for (let showlist of user.MyShowLists) {
        console.log('kdkdkd', showlist.Shows);
    }
    //^^above code grabs all of John Wicks shows but need to divide them up by watch,want,curr


    // for (let wantList of want.MyShowLists) {
    //     console.log('two show', wantList.Shows)
    // }
    //^^^ this still grabs all the shows

    // const showLists = user.MyShowLists;
    // const shows = showLists.Shows;

    res.render('my-show-list.pug', {

    })

}))

module.exports = router;
