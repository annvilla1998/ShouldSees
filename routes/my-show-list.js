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

    const user = await User.findByPk(1, {
        include: {
            model: MyShowList,
            include: Show
        }
    })

    const showLists = user.MyShowLists;
    const shows = showLists.Shows;

    console.log("&&&&&&&&&&&&&&&&&&", showLists.MyShowList)

    res.render('my-show-list.pug', {

    })

}))

module.exports = router;
