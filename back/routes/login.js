const express = require('express');
const router = express.Router();
const { controler_login }  = require('../controller/controler_login');


router.get('/', controler_login)

module.exports = router;
