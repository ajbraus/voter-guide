const express = require('express');
const router = express.Router();
const models  = require('../db/models');

/* GET NEW */
router.get('/endorsements/new', (req, res, next) => {
  res.render('endorsements-new');
});

/* POST CREATE */
router.post('/endorsements', (req, res, next) => {
  models.Endorsement.create(req.body).then(e => {
    console.log(e);
    res.redirect('/')
  }).catch(err => {
    console.log(err);
  })
});

/* GET SHOW */
router.get('/endorsements/:id', (req, res, next) => {
  models.Endorsement.findByPk(req.params.id).then(e => {
    res.render('endorsements-show', { e });
  }).catch(err => {
    console.log(err);
  })
});


/* GET EDIT */
router.get('/endorsements/:id/edit', (req, res, next) => {
  models.Endorsement.findByPk(req.params.id).then(e => {
    res.render('endorsements-edit', { endorsement: e });
  }).catch(err => {
    console.log(err);
  })
});

/* PUT UPDATE */
router.put('/endorsements/:id', (req, res, next) => {
  models.Endorsement.findByPk(req.params.id).then(e => {
    e.update(req.body).then(e => {
      res.redirect('/')
    }).catch(err => {
      console.log(err);
    })
  }).catch(err => {
    console.log(err);
  })
});


/* DELETE DESTROY */
router.delete('/endorsements/:id', (req, res, next) => {
  models.Endorsement.findByPk(req.params.id).then(e => {
    e.destroy();
    res.redirect('/');
  }).catch(err => {
    console.log(err);
  })
});

module.exports = router;
