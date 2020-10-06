const express = require('express');
const router = express.Router();
const models  = require('../db/models');

/* GET home page. */
router.get('/', (req, res, next) => {
  models.Endorsement.findAll({ order: [['updatedAt', 'DESC']] }).then(endorsements => {
    res.render('index', { endorsements });
  })
});

module.exports = router;
