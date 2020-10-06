var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sign-up', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET home page. */
router.get('/users/:id', (req, res, next) => {
  res.render('users-show');
});


module.exports = router;
