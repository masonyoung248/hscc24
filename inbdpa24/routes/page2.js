var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page2', { title: 'BDPA Page 2' });
});

// POST registration page
router.post('/', function(req, res, next) {
  res.render('postregister',
  { 
    title: 'Post Registration',
    username: req
    email: 'Email goes here',
    salt: 'salt goes here',
    key: 'key goes here'
  }
  )
});

module.exports = router;
