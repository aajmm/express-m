var express = require('express');
var router = express.Router();
var addUser = require('./user_api/index');

/* GET users listing. */
router.post('/api/addUser', addUser.addUser);

module.exports = router;