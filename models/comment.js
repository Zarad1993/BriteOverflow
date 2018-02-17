var Sequelize = require('sequelize');
module.exports = function(db) {
  return db.define('comment', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    value: {
      type: Sequelize.TEXT('long'),
      allowNull: false
    },
    votes: {
      type: Sequelize.JSON,
      allowNull: true
    }
  })
}