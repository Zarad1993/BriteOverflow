module.exports = function(db) {
  var User = require('./user')(db);
  var Question = require('./question')(db);
  var Comment = require('./comment')(db);

  Question.belongsTo(User);
  User.hasMany(Question);
  Comment.belongsTo(User);
  Comment.belongsTo(Question);
  User.hasMany(Comment);
  Question.hasMany(Comment);

  // User.create({
  //   name: 'Mohammad',
  //   email: 'mohammad@britecore.com'
  // })
  // Question.create({
  //   value: 'Where can I find the password of the database in BC?',
  //   votes: '[{"id": "user-id", "value": 1}]',
  //   userId: "f80359c0-13ce-11e8-a1c0-ff0124996f91",
  //   label: 'supp'
  // })
  // Comment.create({
  //   userId: "f80359c0-13ce-11e8-a1c0-ff0124996f91",
  //   questionId: "1ce14ca0-13d1-11e8-ab69-4f103765265b",
  //   votes: '[{"id": "user-id", "value": true}]',
  //   value: 'That seems like the right answer'
  // });

  // User.sync({force: true})
  // Question.sync({force: true})
  // Comment.sync({force: true})
  return {
    Question: Question,
    User: User,
    Comment: Comment
  }
}