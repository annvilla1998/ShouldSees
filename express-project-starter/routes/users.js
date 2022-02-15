const express = require('express');
const router = express.Router();
const db = require('../db/models');






/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function (req, res, next) {
  res.render('user-register')
});

router.post('/register', (req, res, next) => {
  const {
    username,
    email,
    password
  } = req.body;

  let user = db.User.build({
    username,
    email

  })

})


module.exports = router;
