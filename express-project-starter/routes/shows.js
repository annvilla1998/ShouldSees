const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

router.get('/', asyncHandler(async(req,res) => {

}))

router.get('/:id(\\d+)', asyncHandler( async(req,res) => {
    
}))


module.exports = router;