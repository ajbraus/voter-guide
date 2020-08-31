var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Iron Man III' });
});

/* GET home page. */
router.get('/oak-trees', (req, res, next) => {
  res.render('oak-trees', { favoriteOakTree: 'The Red Oak' });
});


module.exports = router;
