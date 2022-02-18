const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const myshowlistshow = require('../db/models/myshowlistshow');
const { User, MyShowList, Show } = db;

router.get('/', asyncHandler(async (req, res) => {

    // const showList = db.myShowList.build();
    const myShows = await MyShowList.findAll({
        include: {
            model: MyShowList,
            include: Show
        }
    });

    console.log('&&&&&&&&&&&&&&&&', myShows.Show);

    res.render('my-show-list',{
        myShows
    })

    const { currWatch, watched, wantWatch, userId } = req.body;
    // const { myShowListId } = req.body;

    // console.log('req.body', req.body);

    // const shows = await db.Show.findAll({
    //     where: { myShowListId }
    // })

    // const myShowList = await db.MyShowList.findAll({
    //     where: { userId }
    // })
    // console.log('am i in here')
    // res.render('my-show-list.pug');
}))

module.exports = router;
