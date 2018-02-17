module.exports = function(models) {
  var express = require('express')
  var sequelize = require('sequelize');
  var router = express.Router();
  var path = require('path');
  var VIEWS_DIR = path.join(__dirname + '/../',  "views");
  var {Question, Comment, User} = models;

  // middleware that is specific to this router
  router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  });

  // define the home page route
  router.get('/', function (req, res) {
    Question
    .findAll()
    .then(function(qs) {
      res.status(200).send({'success': true, data: qs});
    });
  });

  router.get('/ask', function(req, res) {
    res.status(200).send('Your asking a question');
  });

  router.post('/ask', function(req, res) {
    Question
      .create({
      value: req.body.question,
      label: req.body.label,
      userId: "30f559d0-13ee-11e8-9069-d725cccf8806"
    }).then(function() {
      res.status(201).send({'success': true});
    }).catch(function(err) {
      res.status(400).send({'success': false})
    })
  });

  router.get('/:questionId', function (req, res) {
    res.sendFile(path.join(VIEWS_DIR, "question.html"));
  });

  router.get('/get_question', function(req, res) {
    Question
      .findOne({
      id: req.body.questionId
    }).then(function(qs) {
      console.log(qs);
      res.status(200).send('Returning question ID: ' + req.params.questionId);
    })
  })
  return router;
}