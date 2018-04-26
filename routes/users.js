var express = require('express');
var router = express.Router();
var path = __dirname + '/views/';

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
    res.sendfile(path + '1512109.pug');
});

module.exports = router;