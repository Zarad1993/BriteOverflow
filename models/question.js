var Sequelize = require('sequelize');
module.exports = function(db) {
  return db.define('question', {
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
    },
    label: {
      type: Sequelize.ENUM('engineering', 'salesAndMarketing', 'docsAndContent'),
      allowNull: false
    }
  })
}