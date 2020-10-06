var express = require('express');
var router = express.Router();

/* GET NEW */
router.get('/endorsements/new', (req, res, next) => {
  res.render('endorsements-new');
});

/* GET EDIT */
router.get('/endorsements/:id/edit', (req, res, next) => {
  res.render('endorsements-edit');
});


module.exports = router;
