 
const express = require('express');
const router = express.Router();
const router_login = require('./login');


router.use('/login', router_login);

router.get('/', (req, res) => {
  res.send('Server is running');
});

module.exports = router
