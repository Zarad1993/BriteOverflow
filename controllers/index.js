module.exports = function(app, models) {
  var questions = require('./questions')(models);
  app.use('/questions', questions);
};
